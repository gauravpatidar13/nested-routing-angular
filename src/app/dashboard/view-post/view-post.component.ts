import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
comments=[];
postAuthor;
author;
authorId;
currentUserId;
post;
  constructor(private db:AngularFireDatabase,private afs:AngularFirestore) { 

  }

  ngOnInit(): void {
    this.post=JSON.parse(localStorage.getItem('post'))
  this.currentUserId=localStorage.getItem('author')
    this.afs.collection("Users").doc(this.post.data.author).valueChanges().subscribe(data=>{
      this.postAuthor=data;
      console.log(this.postAuthor)
    })
  this.afs.collection("Users").doc(localStorage.getItem('author')).valueChanges().subscribe(data=>{
    this.author=data;
  })
  this.db.list("Comments/"+this.post.id).valueChanges().subscribe(data=>{
    this.comments=data;
    console.log(this.comments)
  })

  }
  postComments(comment){  
    let currentUserId=localStorage.getItem('author')
    this.db.list("notifications/"+this.post.data.author+"/"+currentUserId).push({notification_type:"Comment",postId:this.post.id}).then(success=>{
    })
this.db.list("Comments/"+this.post.id).push({comment:comment,timestamp:Date.now(),by:this.currentUserId}).then(success=>{
  console.log(success)
})
  }
  openUserProfile(){
localStorage.setItem('postAuthorId',this.post.data.author)
  }
}
