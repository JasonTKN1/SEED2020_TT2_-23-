import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from '../../service/session.service';
import { CustomerService } from '../../service/customer.service';

import { Customer } from '../../class/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customer: Customer;
  loginForm: any = null;
  errorMessage: string = '';
  loginError: boolean;

  constructor(
    public sessionService: SessionService,
    public customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl(this.sessionService.getPassword(), [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(64)
      ]),
      username: new FormControl(this.sessionService.getUsername(), [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(64)
      ]),
      rememberMe: new FormControl(this.sessionService.getRememberMe()),
    }, { updateOn: 'blur' })
  }

  login(): void {
    console.log("submit form");

    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);


    //Retrieve value from form
    this.customerService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      response => {
         console.log("response " + JSON.stringify(response));
         console.log(response.custId);

        if (response != null) {
          if (this.loginForm.value.rememberMe == true) {
            this.sessionService.setUsername(this.loginForm.value.username);
            this.sessionService.setPassword(this.loginForm.value.password);
            this.sessionService.setRememberMe(true);
          } else {
            this.sessionService.setUsername("");
            this.sessionService.setPassword("");
            this.sessionService.setRememberMe(false);
          }
          this.sessionService.setIsLogin(true);
          this.customer.custId = response.custID;
          this.customer.address = response.address;
          this.customer.age = response.age;
          this.customer.email = response.email;
          this.customer.firstName = response.firstName;
          this.customer.lastName = response.lastName;
          this.customer.nric = response.nric;
          this.customer.gender = response.gender;
          this.customer.phoneNumber = response.phoneNumber;

          console.log("checking if customer is stored " + JSON.stringify(this.customer));
          this.sessionService.setCustomer(JSON.stringify(this.customer));


          this.loginError = false;

          this.router.navigate(["/home"]);
        }
        else {
          this.loginError = true;
        }
      },
      error => {
        this.loginError = true;
        this.errorMessage = error
      });
  }
}
