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

  transactionDetail: Transaction;
  transactionDetails: Transaction[];
  customer: Customer;
  customers: Customer[]
  errorMessage: string = '';

  constructor(public transactionService: TransactionViewService,
    public sessionService: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.view();
  }

  view(): void {
  //Retrieve value from 
  this.customer = JSON.parse(this.sessionService.getCustomer());

    this.transactionService.showTransactionHistory(23).subscribe(
      response => {
        console.log("response " + JSON.stringify(response));
        if (response != null)
        {
          for(let i = 0; i < response.length; i++)
          {
            this.transactionDetail.amount = response[i].amount;
            this.transactionDetail.custID = response[i].custID;
            this.transactionDetail.dateTime = response[i].dateTime.toLocaleString();
            this.transactionDetail.eGift= response[i].eGift;
            this.transactionDetail.expensesCat = response[i].expensesCat;
            this.transactionDetail.message = response[i].message;
            this.transactionDetail.payeeID = response[i].payeeID;
            //add to the array of Transactions
            this.transactionDetails.push(this.transactionDetail);
          }
        }
        this.router.navigate(["/transactionView"])
    },
      error => {
        this.errorMessage = error
  })};

  
  testTransactions = [
    {
        "eGift": true,
        "dateTime": "2020-05-05T11:12:45.716Z",
        "custID": 12,
        "expensesCat": "Entertainment",
        "amount": 998.58,
        "message": "Thanks. :)",
        "payeeID": 23
    },
    {
        "eGift": false,
        "dateTime": "2020-08-13T12:23:48.041Z",
        "custID": 22,
        "expensesCat": "Transport",
        "amount": 435.82,
        "message": "",
        "payeeID": 23
    },
    {
        "eGift": false,
        "dateTime": "2020-05-27T07:19:23.804Z",
        "custID": 17,
        "expensesCat": "Insurance",
        "amount": 978.45,
        "message": "",
        "payeeID": 23
    },
    {
        "eGift": true,
        "dateTime": "2019-12-23T18:20:39.132Z",
        "custID": 13,
        "expensesCat": "Entertainment",
        "amount": 146.13,
        "message": "Thanks. :)",
        "payeeID": 23
    },
    {
        "eGift": false,
        "dateTime": "2020-02-05T00:56:52.742Z",
        "custID": 19,
        "expensesCat": "Insurance",
        "amount": 676.97,
        "message": "",
        "payeeID": 23
    },
    {
        "eGift": true,
        "dateTime": "2020-02-17T04:26:22.497Z",
        "custID": 23,
        "expensesCat": "Shopping",
        "amount": 423.53,
        "message": "Thanks. :)",
        "payeeID": 3
    },
    {
        "eGift": false,
        "dateTime": "2020-06-11T16:04:55.405Z",
        "custID": 12,
        "expensesCat": "Insurance",
        "amount": 5.62,
        "message": "",
        "payeeID": 23
    },
    {
        "eGift": false,
        "dateTime": "2020-06-08T14:35:06.464Z",
        "custID": 23,
        "expensesCat": "Transport",
        "amount": 515.54,
        "message": "",
        "payeeID": 4
    },
    {
        "eGift": false,
        "dateTime": "2020-05-05T17:03:08.932Z",
        "custID": 23,
        "expensesCat": "Transport",
        "amount": 511.49,
        "message": "",
        "payeeID": 9
    },
    {
        "eGift": true,
        "dateTime": "2020-08-13T20:24:50.621Z",
        "custID": 13,
        "expensesCat": "Insurance",
        "amount": 604.72,
        "message": "Thanks. :)",
        "payeeID": 23
    },
    {
        "eGift": false,
        "dateTime": "2020-04-20T17:12:34.563Z",
        "custID": 23,
        "expensesCat": "Shopping",
        "amount": 196.33,
        "message": "",
        "payeeID": 18
    }
];
}
