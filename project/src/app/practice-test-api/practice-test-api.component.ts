import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-test-api',
  templateUrl: './practice-test-api.component.html',
  styleUrls: ['./practice-test-api.component.css']
})
export class PracticeTestApiComponent {
allUsers='https://devservices.qpathways.com/otc/test/user'
constructor(private http:HttpClient){

}
alluser:any=[]
getalluser(){
  this.http.get(this.allUsers).subscribe((res:any)=>{
this.allUsers=res
console.log(res,'ress');

  })
}
}
