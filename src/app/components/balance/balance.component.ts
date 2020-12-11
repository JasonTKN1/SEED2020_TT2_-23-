import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { CustomerService } from '../../service/customer.service';
import { SessionService } from '../../service/session.service';
import { BalanceService } from '../../service/balance.service';

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

    customer: Customer;
    accountDetails: {[key: string]: any} = {};
    constructor(
        public sessionService: SessionService,
        public customerService: CustomerService,
        public balanceService: BalanceService
      ) { 
        this.customer = new Customer();
      }

  ngOnInit(): void {
    this.customer = JSON.parse(this.sessionService.getCustomer());
    this.accountDetails = this.balanceService.viewAccount(1).subscribe(
        response => {
            console.log("response " + JSON.stringify(response));
            this.accountDetails = response
        }
    );
  }



}
