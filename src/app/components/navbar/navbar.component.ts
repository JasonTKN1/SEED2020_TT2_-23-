import { Component, OnInit, Input } from '@angular/core';

import { SessionService } from '../../service/session.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;

  constructor(public sessionService: SessionService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    this.isLogin = this.sessionService.getIsLogin();
    if (!this.isLogin) {
      this.router.navigate(["/ui/login"]);
    }
  }

  logout(): void {
    this.sessionService.setIsLogin(false);
    //console.log(this.sessionService.getAccessToken());
    this.sessionService.setAccessToken("");

    this.router.navigate(["/login"]);
  }

}
