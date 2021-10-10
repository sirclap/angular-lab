import { User } from '@core/api/user/model/user.model';

export class LoginResponse {
  accessToken!: string;
  user!: User;
}
