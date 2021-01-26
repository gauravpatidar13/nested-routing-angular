import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {
  @Input() commentUserId;
  commentUser;
  constructor(private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection("Users").doc(this.commentUserId).valueChanges().subscribe(data=>{
this.commentUser=data;
    })
  }

}
