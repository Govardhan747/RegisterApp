import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  goto() {
    throw new Error('Method not implemented.');
  }
user=new User();
msg=''
ismatched:boolean=false
msg1=''
password:string='';
conformpassword:string='';
usercreated:boolean=false;

  constructor(private service:RegistrationService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerUser(){
    if(this.user.password==this.conformpassword){
       this.ismatched=false
    this.service.registerUserFromRemote(this.user).subscribe(

data=>{
  this.msg="Registration successfull"
  setTimeout(() => {
    alert("Registration successfull");
  }, 2000);
  // console.log("receieved")
  this.router.navigate(['/login'])
  this.usercreated=true;
 }, err=>{
  this.msg1=" Enter EmailId is Already Exit "
  console.log(err.error,"error")
})}
else{
  this.ismatched=true
  console.log("not matche")
}
}
}
