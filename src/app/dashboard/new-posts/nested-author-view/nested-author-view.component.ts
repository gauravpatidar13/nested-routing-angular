import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-nested-author-view',
  templateUrl: './nested-author-view.component.html',
  styleUrls: ['./nested-author-view.component.css']
})
export class NestedAuthorViewComponent implements OnInit {
 @Input() authorId;
 postAuthor;
  constructor(private afs:AngularFirestore) { 
   
  }
  openUserProfile(){
   localStorage.setItem('postAuthorId',this.authorId);
  }
  ngOnInit(): void {
    this.afs.collection("Users").doc(this.authorId).valueChanges().subscribe(data=>{
      this.postAuthor=data;
    })
  }

}
