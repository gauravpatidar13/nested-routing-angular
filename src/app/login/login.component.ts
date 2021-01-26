import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Users=[];
  constructor(private firestore:AngularFirestore,private router:Router) { }

  ngOnInit(): void {
    this.firestore
  .collection("Users")
  .get()
  .subscribe((ss) => {
    ss.docs.forEach((doc) => {
      
      this.Users.push({data:doc.data(),id:doc.id});
    });
  });
  }
  loginUser(user){
for(let i=0;i<this.Users.length;i++){
 if(this.Users[i].data.email==user.email){
   if(this.Users[i].data.password==user.password)
  {
    localStorage.setItem('author',this.Users[i].id)
    this.router.navigate(['dashboard/new-post'])
    break;
}
   else{
   alert('password is wrong')
break;
   }
  }
}

  }
}
