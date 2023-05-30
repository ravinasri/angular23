import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { birds } from '../models/birds'; 
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {

  constructor(private fb : FormBuilder){}

  onSubmit() {
    window.alert("Form Submitted..")  
    console.log(this.profileForm.value);
    console.log(this.profileForm.status);
    console.log(this.nickName.value)
    console.log(this.ContactForm.value)
  }
  profileForm = new FormGroup({
    firstName: new FormControl('RAVINA',Validators.required),
    lastName: new FormControl('THANGAVEL',Validators.required),
    dob: new FormControl('',Validators.required)
  });

  nickName = new FormControl('',Validators.required);
  
ContactForm = this.fb.group({
fname: 'LOS',
lname: 'ANGELINA',
dob: '1998-07-03',
country: 'America',
phone: '654321065'
})
  
  public isDisabled: boolean = true;
  
  text: string = '';
  public applyClass: string = "failure-class";
  messageClass = {
    "failure-class": !this.isDisabled,
    "success-class": this.isDisabled,
    "special-class": this.isDisabled
  }
  public styleObject = {
    color: "Orange",
    fontStyle: "italic"
  }
  name(){
    return 10;
  }
   myfunction(event) {
    this.text +=  event.target.value + '/';
  }
  colorFunction(){
    return "10px";
  }
  // updateName(){
  //   this.lgc.setValue("Thangavel");
  // }
  }
