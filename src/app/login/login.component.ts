import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name: any ="Ravina";
pwd:any ="ravi";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm){
    console.log(contactForm.value)
    if(contactForm.value != null){
      
    }
  }
}
