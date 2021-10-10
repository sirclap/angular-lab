import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '@core/auth/session/session.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  constructor(public sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.sessionService.removeCurrentSession();
    this.router.navigate(['']);
  }
}
