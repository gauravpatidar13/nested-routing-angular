import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent implements OnInit {
  selectedFile: File = null;
  currentUserLoggedIn;
	downloadURL;
  constructor(private storage:AngularFireStorage,private afs:AngularFirestore) { }
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            console.log(url)
            this.downloadURL=url;
            this.afs.collection("Users").doc()
          });
        })
      )
      .subscribe(url => {
      
	  });
	}
  ngOnInit(): void {
    let iddd=localStorage.getItem('author')
  this.afs.collection("Users").doc(iddd).valueChanges().subscribe(data=>{
    this.currentUserLoggedIn=data;
  })
  }
  uploadAvatar(){
    let iddd=localStorage.getItem('author')
    this.afs.collection("Users").doc(iddd).update({avatar:this.downloadURL}).then(success=>{
console.log(success)
    })
      
  
  }
}
