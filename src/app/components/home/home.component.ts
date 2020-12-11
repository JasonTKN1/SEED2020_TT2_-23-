import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/class/customer';

import { CustomerService } from '../../service/customer.service';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
