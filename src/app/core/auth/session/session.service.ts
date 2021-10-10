import { Injectable } from '@angular/core';
import { User } from '@core/api/user/model/user.model';
import { UserService } from '@core/api/user/user.service';
import { Session } from '../model/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private localStorageService: Storage;
  private sessionKey: string = 'session_token';
  private currentSession: Session;

  constructor(private userService: UserService) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem(this.sessionKey, JSON.stringify(session));
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem(this.sessionKey);
    this.currentSession = null;
  }

  loadSessionData(): Session {
    var sessionStr = this.localStorageService.getItem(this.sessionKey);
    return sessionStr ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  isAuthenticated(): boolean {
    var session = this.getCurrentSession();
    return session && session.accessToken ? true : false;
  }
}
