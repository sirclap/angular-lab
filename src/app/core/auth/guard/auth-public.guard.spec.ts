import { TestBed } from '@angular/core/testing';

import { AuthPublicGuard } from './auth-public.guard';

describe('AuthPublicGuardService', () => {
  let service: AuthPublicGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPublicGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
