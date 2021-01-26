import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private db:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(user){
 this.db.collection("Users").add(user).then(success=>{
   localStorage.setItem('author',success.id)
this.router.navigate(['dashboard/new-post'])
 }).catch(error=>{
   console.log(error)
 })
  }
}
