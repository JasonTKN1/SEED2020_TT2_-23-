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
  transferError: boolean;

  constructor(
    public sessionService: SessionService,
    public customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      payeeID: new FormControl(this.sessionService.getPayeeID(), [
        Validators.required,
        Validators.minLength(0),
        Validators.maxLength(64)
      ]),
      expCat: new FormControl(this.sessionService.getExpCat()),
      e_gift: new FormControl(this.sessionService.getEgift()),
      message: new FormControl(this.sessionService.getMessage()),
      amount: new FormControl(this.sessionService.getAmount()),
    }, { updateOn: 'blur' })
  }

  transfer_money(): void {
    console.log("submit form");
  
    console.log(this.transferForm.value.payeeID);
    
    console.log(this.customerService.users_information());
    //Retrieve value from form
    //this.customerService.transfer(this.loginForm.value.username, this.loginForm.value.password).subscribe()
    this.router.navigate(["/home"]);
  }
}

