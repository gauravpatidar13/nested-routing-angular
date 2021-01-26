import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-nested-likes-view',
  templateUrl: './nested-likes-view.component.html',
  styleUrls: ['./nested-likes-view.component.css']
})
export class NestedLikesViewComponent implements OnInit {
  currentUserId;
  temp;
  @Input() currentPostId;
  @Input() postAuthorId;
  bool=false;
  totalLikes;
  constructor(private db:AngularFireDatabase,private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.currentUserId=localStorage.getItem('author')
    
    this.db.list("likes/"+this.currentPostId+"/"+this.currentUserId).valueChanges().subscribe(data=>{
      if(data.length==0)
      this.bool=false;
      else
      this.bool=true;
    })
    this.db.list('likes/'+this.currentPostId).valueChanges().subscribe(data=>{
      this.totalLikes=data.length;
    })
  }
  likePost(){
    this.bool=!this.bool;
        this.db.list("likes/"+this.currentPostId+"/"+this.currentUserId).push({isLiked:true}) 
    this.db.list("notifications/"+this.postAuthorId+"/"+this.currentUserId).valueChanges().subscribe(data=>{
this.temp=data;
for(let i=0;i<this.temp.length;i++){
  if(this.temp[i].notification_type=="Liked"&&this.temp[i].postId==this.currentPostId){
return;
  }
}
this.db.list("notifications/"+this.postAuthorId+"/"+this.currentUserId).push({notification_type:"Liked",postId:this.currentPostId})
      console.log(data)
     
    })
    // .push({notification_type:"Liked",postId:this.currentPostId})
      }
  unlikePost(){
    this.bool=!this.bool;
        this.db.list("likes/"+this.currentPostId+"/"+this.currentUserId).remove() 
    }
}
