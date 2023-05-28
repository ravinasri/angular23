import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { birds } from '../models/birds'; 
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  profileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
  });
  
  lgc = new FormControl('',Validators.required);
  fname: string = "Los";
  lname: string = "Angelina";
  country: string = "America";
  phone: string = "654321065";
  public isDisabled: boolean = true;
  dob: string = "1998-07-03"
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
  updateName(){
    this.lgc.setValue("Thangavel");
  }
  }
