import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';
import { CustomerService } from '../../service/customer.service';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-view-account-details',
  templateUrl: './view-account-details.component.html',
  styleUrls: ['./view-account-details.component.scss']
})
export class ViewAccountDetailsComponent implements OnInit {
  customer: Customer;

  constructor(public customerService: CustomerService,
    public sessionService: SessionService) { 
      this.customer = new Customer();
    }

  ngOnInit(): void {
    this.customer = JSON.parse(this.sessionService.getCustomer());
    console.log("home page " + JSON.stringify(this.customer.firstName));
  }

}
