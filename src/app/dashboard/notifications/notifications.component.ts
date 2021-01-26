import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
currentUserId;
pics=[];
pics_real=[];
auxUserIds;
auxUsers=[];
  constructor(private db:AngularFireDatabase,private afs:AngularFirestore) { 
  }

  ngOnInit(): void {
    this.currentUserId=localStorage.getItem('author')
    this.db.list('notifications/'+this.currentUserId).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        return a.key;
      })
    })).subscribe(data=>{
      this.auxUserIds=data;
      for(let i=0;i<this.auxUserIds.length;i++){
        this.afs.collection('Users').doc(this.auxUserIds[i]).valueChanges().subscribe(data=>{
          this.auxUsers.push(data)
          })
      }
      for(let j=0;j<this.auxUserIds.length;j++)
      {
        this.db.list('notifications/'+this.currentUserId+"/"+this.auxUserIds[j]).valueChanges().subscribe(data=>{
//this will return array[]
          this.pics=data;
          this.afs.collection("Posts").doc(this.pics[j].postId).valueChanges().subscribe(data=>{
this.pics_real.push(data);
          })
        })
      }
    }) 
  }
}