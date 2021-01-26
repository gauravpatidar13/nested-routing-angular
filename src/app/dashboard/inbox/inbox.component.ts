import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
msgs=[];
msgUsers=[];
allChats;
allUsers;
currentChatUser=null;
currentUserId;
chatWindowActive=false;
  constructor(private afs:AngularFirestore,private db:AngularFireDatabase) { }

  ngOnInit(): void {
    this.currentUserId=localStorage.getItem('author')
    this.afs.collection("Users").snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data();
        const id=a.payload.doc.id;
        return {id,data};
      })
    })).subscribe(data=>{
this.allUsers=data;
this.msgUsers=[];
for(let i=0;i<this.allUsers.length;i++){
if(this.allUsers[i].id!=this.currentUserId){
this.msgUsers.push(this.allUsers[i])
}
}
    })
  }
  sendMsgs(msg){
if(msg!=""){
  this.db.list("chats").push({sender:this.currentUserId,msg:msg,receiver:this.currentChatUser.id,timestamp:Date.now()})
}
  }
  selectUser(chatUser){
    this.chatWindowActive=true;
this.currentChatUser=chatUser;

this.db.list('chats').valueChanges().subscribe(data=>{
this.allChats=data;
this.msgs=[];
for(let i=0;i<this.allChats.length;i++){
  if(this.allChats[i].receiver==this.currentUserId&&this.allChats[i].sender==this.currentChatUser.id){
this.msgs.push({msg:this.allChats[i].msg,pos:"left",timestamp:this.allChats[i].timestamp})
  }
  else if(this.allChats[i].sender==this.currentUserId&&this.allChats[i].receiver==this.currentChatUser.id){
    this.msgs.push({msg:this.allChats[i].msg,pos:"right",timestamp:this.allChats[i].timestamp})
  }
}
})
  }
}
