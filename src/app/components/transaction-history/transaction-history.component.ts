import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../class/transaction';
import { Customer } from '../../class/customer';
import { TransactionViewService } from '../../service/transaction-view.service';
import { SessionService } from '../../service/session.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  transactionDetails: Transaction;
  customer: Customer;
  errorMessage: string = '';

  constructor(public transactionService: TransactionViewService,
    public sessionService: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.customer = new Customer();
    }

  ngOnInit(): void {
  }

  view(): void {
    //Retrieve value from 
    this.customer = JSON.parse(this.sessionService.getCustomer());
    console.log("customer Id" + this.customer.custId);


    this.transactionService.showTransactionHistory(this.customer.custId).subscribe(
      response => {
        console.log("response " + JSON.stringify(response));
        if (response != null) {
          this.transactionDetails.amount = response.amount;
          this.transactionDetails.custID = response.custID;
          this.transactionDetails.dateTime = response.dateTime;
          this.transactionDetails.eGift = response.eGift;
          this.transactionDetails.expensesCat = response.expensesCat;
          this.transactionDetails.message = response.message;
          this.transactionDetails.payeeID = response.payeeID;
        }
      },
      error => {
        this.errorMessage = error
      })
  };
}
