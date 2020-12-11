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

  constructor(public transactionService: TransactionViewService,
    public sessionService: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  view(): void {
  //Retrieve value from 
  this.customer = JSON.parse(this.sessionService.getCustomer());

    this.transactionService.showTransactionHistory(this.customer.custId).subscribe(
      response => {console.log("response " + JSON.stringify(response));
    })
  }
}
