
import { User } from '@core/api/user/model/user.model';
import jwt_decode, { JwtPayload } from 'jwt-decode';

export class Session {
  accessToken: string;
  payload: JwtPayload;
  user: User;

  constructor(accessToken: string, user: User) {
    this.accessToken = accessToken;
    this.payload = jwt_decode(accessToken);
    this.user = user;
  }
}
