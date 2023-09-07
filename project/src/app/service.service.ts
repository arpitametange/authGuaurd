import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private router:Router) { }
  get(username:any,password:any){
   if (username=='arpita' && password=='arpita1234') {
    localStorage.setItem('username','arpita')
    return true
   }
   else{
  return  false
   }
  }
}
