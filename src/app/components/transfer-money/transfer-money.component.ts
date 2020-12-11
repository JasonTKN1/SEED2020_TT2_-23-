import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from '../../service/session.service';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss']
})
export class TransferMoneyComponent implements OnInit {
  transferForm: any = null;
  errorMessage: string = '';
  loginError: boolean;

  constructor(
    public sessionService: SessionService,
    public customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.transferForm = new FormGroup({
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

  transfer_money(): void {
    console.log("submit form");
  
    console.log(this.transferForm.value.username);
    console.log(this.transferForm.value.password);

    //Retrieve value from form
    //this.customerService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe
  }
}

