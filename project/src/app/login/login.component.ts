import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router,private service:ServiceService){

}

  getdata(username:any,password:any){
var output=this.service.get(username,password)
    if(output){
      this.router.navigate(['home'])

   }
   else{
     alert('please enter valid userrname and password')
   }

  }
}
