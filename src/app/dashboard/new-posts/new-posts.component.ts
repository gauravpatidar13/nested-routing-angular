import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {
posts;
all_posts;
currentUserId;
bool=false;
  constructor(private firestore:AngularFirestore,private router:Router,
    private db:AngularFireDatabase) { }

  ngOnInit(): void {
    this.currentUserId=localStorage.getItem('author')
    this.firestore.collection("Posts").snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
        return {id,data};
      })
    })).subscribe(data=>{
this.all_posts=data;
this.posts=[];
for(let i=0;i<this.all_posts.length;i++){
if(this.all_posts[i].data.author!=this.currentUserId){
  this.posts.push(this.all_posts[i]);
}
}
    })
  }
  openPostDetail(newPost){
    localStorage.setItem('post',JSON.stringify(newPost))
  }
  selectPost(selPost){
localStorage.setItem('post',JSON.stringify(selPost))
  }
}