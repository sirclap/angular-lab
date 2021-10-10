import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPublicGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate() {
    if (this.sessionService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
