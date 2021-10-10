import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '@core/auth/session/session.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  @Input()
  visible: boolean;

  constructor(public sessionService: SessionService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.sessionService.removeCurrentSession();
    this.router.navigate(['']);
  }
}
