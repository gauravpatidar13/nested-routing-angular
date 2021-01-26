import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
postAuthorId;
postAuthor;
posts_images=[];
allPosts;
  constructor(private afs:AngularFirestore) { }
  toggleFun(tog){
tog.style.innerHTML="Follow"
  }
  ngOnInit(): void {
  this.postAuthorId=localStorage.getItem('postAuthorId');
  
  this.afs.collection("Users").doc(this.postAuthorId).valueChanges().subscribe(data=>{
    this.postAuthor=data;
  })
  
  this.afs.collection("Posts").valueChanges().subscribe(data=>{
    this.allPosts=data;
    this.posts_images=[];
    for(let i=0;i<this.allPosts.length;i++){
      if(this.allPosts[i].author==this.postAuthorId){
        this.posts_images.push(this.allPosts[i].post_url)
      }
    }
  })

 
  }

}
