import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import * as FilePond from 'filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

FilePond.registerPlugin(FilePondPluginImagePreview);

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file_to_upload;
  hasError=false;
  author;
  @ViewChild('myPond') myPond: any;
  uploadedFiles=[];
  pondOptions = {
		class: 'image-upload',
		multiple: true,
		maxFiles: 1,
		labelIdle: 'Drop files here or Browse',
		acceptedFileTypes: 'image/jpeg, image/png',
		allowImageExifOrientation: true,
		allowImagePreview: true,
		imagePreviewMinHeight: 44,
		imagePreviewMaxHeight: 100,
		imagePreviewMaxFileSize: 20,
		allowImageCrop: true,
		imageCropAspectRatio: '1:1',
		allowImageTransform: true,
	};
  
  pondHandleAddFile(event: any) {
   this.file_to_upload=event.file.file;
  
  }
  constructor(private storage:AngularFireStorage,private db:AngularFirestore) { }

  ngOnInit(): void {
    this.author=localStorage.getItem('author')
  }
  postData(des){
    if(this.file_to_upload==undefined||des==""){
      this.hasError=true;
    }
    if(this.file_to_upload!=undefined&&des!=""){
      this.hasError=false;
      this.uploadImageToFirebase(this.file_to_upload,des)
    }
  }
  async uploadImageToFirebase(file,content){
    var n = Date.now();
    const filePath = `uploads/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task=this.storage.upload(`uploads/${n}`,file);
   return await task.snapshotChanges().pipe(finalize(()=>{
fileRef.getDownloadURL().subscribe(data=>{
  this.db.collection("Posts").add({post_url:data,post_text:content,author:this.author,time_stamp:Date.now()}).then(success=>{
    console.log(success)
  }).catch(error=>{
    console.log(error)
  })
})
   })).subscribe(data=>{
   });
  }
}
