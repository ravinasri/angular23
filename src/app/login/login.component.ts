import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, concat } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  //field creation for observable disposable
  subscription: Subscription;

  count: number = 0;

  //inject form builder
  constructor(private fb: FormBuilder) { }

  //lifecycle destroy method
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  //lifecycle init method
  ngOnInit(): void {

    //observable creation using new keyword - 1st way
    this.subscription = new Observable(function subscriber(subscribe) {
      try {
        subscribe.next('Hi, I am Ravina1 calling...');
        subscribe.next('Hi, I am Ravina2 calling...');
        subscribe.next('Hi, I am Ravina3 calling...');
        subscribe.next('Hi, I am Ravina5 calling...');
        subscribe.next('Hi, I am Ravina6 calling...');
        subscribe.next('Hi, I am Ravina7 calling...');

        setTimeout(() => {
          subscribe.next('Hi, I am Ravina4 calling...');
        }, 2000)
        setInterval((count) => {
          count = count + 1;
          subscribe.next("count: " + count + 1);
        }, 10)
        //subscribe.complete();
      }
      catch (e) {
        subscribe.error(e)
      }
    }).pipe(filter(a => a != "Hi, I am Ravina7 calling...")).subscribe(a => console.log(a), e => console.log(e), () => console.log('completed..'))
  }

  //observable creation using new keyword - 2nd way
  obs2 = new Observable(subscribes => {
    try {
      subscribes.next('Hi, Observable 2 calling..')
      setTimeout(() => {
        subscribes.next('Hi, Observable 2 calling again');
      }, 1000)
      // subscribes.complete();
    }
    catch (e) {
      subscribes.error(e)
    }
  }).subscribe(a => console.log(a), e => console.log(e), () => console.log('Observable 2 completed...'))

  //promise creation using new keyword - 1st way
  promise = new Promise(resolve => {
    try {
      resolve('Promise 1 calling..');
      resolve('Promise 2 calling..');
      resolve('Promise 3 calling..');
      setTimeout(() => {
        resolve('Hi, Promise 2 calling again');
      }, 2000)
      resolve('Promise 5 calling..');
      resolve('Promise 6 calling..');
      resolve('Promise 7 calling..');
    }
    catch (e) {
      console.log(e)
    }
  }).then(a => console.log(a)).catch(e => console.log(e))

  //promise creation using new keyword - 2nd way
  promise2 = new Promise(function resolve(resolve) {
    try {
      resolve('Promise2  calling..');
      resolve('Promise2  calling again..');
      setTimeout(() => {
        resolve('Hi, promise 2 calling again with some delay');
      }, 2000)
      resolve('Promise2 calling again hooo..');
    }
    catch (e) {
      console.log(e)
    }
  }).then(a => console.log(a)).catch(e => console.log(e))

  //Promise creation using new keyword with calling function example
  pro3 = new Promise<string>(resolve => {
    resolve('Checking.....');
  }).then(a => console.log(this.calling()))

  calling(): string {
    return "Resolved yaarrr..,, calback func only called.."
  }

  //promise creation using new keyword with calling functions and display in web page

  pro4 = new Promise(function resolve(resolve, reject) {
    resolve("Promise call back function calling.....>>>");
    reject("Errror mannn..")
  }).then(function value(value) {
    console.log(value)
    myDisplay(value)
    return "value: " + value;
  }, function err(e) {
    console.log(e)
    return "Error: " + e;
  })

  //submit method for reactive form
  onSubmit() {
    window.alert("Form Submitted..")
    console.log(this.profileForm.value);
    console.log(this.profileForm.status);
    console.log(this.nickName.value)
    console.log(this.ContactForm.value)
  }

  //create formgroup
  profileForm = new FormGroup({
    firstName: new FormControl('RAVINA', Validators.required),
    lastName: new FormControl('THANGAVEL', Validators.required),
    dob: new FormControl('', Validators.required)
  });

  //create form control
  nickName = new FormControl('', Validators.required);

  //create form builder
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
  name() {
    return 10;
  }
  myfunction(event) {
    this.text += event.target.value + '/';
  }
  colorFunction() {
    return "10px";
  }
  // updateName(){
  //   this.lgc.setValue("Thangavel");
  // }

}
function myDisplay(value: any) {
  document.getElementById("demo").innerText = value+" heeee :=)";
}

