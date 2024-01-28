import { passportMagicLogin } from './passport-magic-login';

describe('passportMagicLogin', () => {
  it('should work', () => {
    expect(passportMagicLogin()).toEqual('passport-magic-login');
  });
});
