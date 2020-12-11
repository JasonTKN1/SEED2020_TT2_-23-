import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


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
  dateTime: any;
  errorMessage: string = '';
  transferError: boolean;
  egift: boolean;
  expCat: string;

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
      catOthers: new FormControl(this.sessionService.getExpCatOthers()),
      egift_true: new FormControl(this.sessionService.getEgift_true()),
      egift_false: new FormControl(this.sessionService.getEgift_false()),
      shop: new FormControl(this.sessionService.getExpCatShop()),
      message: new FormControl(this.sessionService.getMessage()),
      amount: new FormControl(this.sessionService.getAmount()),
    }, { updateOn: 'blur' })
  }

  transfer_money(): void {
    console.log("submit form");
  
    console.log(this.transferForm.value.payeeID);
    console.log(this.transferForm.value.message);
    console.log(this.transferForm.value.amount);

    this.dateTime = Date.now();
    console.log(this.dateTime);

    if (this.transferForm.value.egift_true){
      this.egift = true;}
    else if (this.transferForm.value.egift_false){
      this.egift = false;}
    
    console.log(this.transferForm.value.e_gift);

    if (this.transferForm.value.shop){
    this.expCat = "shopping";
  }
    else{
    this.expCat = this.transferForm.value.expCatOthers;
    }
    console.log(this.transferForm.value.expCat);

    //Retrieve value from form
    //this.customerService.transfer(this.sessionService.getUserId(), this.transferForm.value.payeeID, this.dateTime,
     //this.transferForm.value.amount, this.transferForm.value.expCat, this.transferForm.value.e_gift, this.transferForm.value.message).subscribe()
    this.router.navigate(["/home"]);
  }
}

