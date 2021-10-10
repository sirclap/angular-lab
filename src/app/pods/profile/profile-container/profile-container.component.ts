import { Component, OnInit } from '@angular/core';
import { User } from '@core/api/user/model/user.model';
import { SessionService } from '@core/auth/session/session.service';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
})
export class ProfileContainerComponent implements OnInit {
  constructor(private sessionService: SessionService) {}
  user: User;

  ngOnInit(): void {
    this.user = this.sessionService.getCurrentUser();
  }
}
