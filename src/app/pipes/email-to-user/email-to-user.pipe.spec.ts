import { EmailToUserPipe } from './email-to-user.pipe';

describe('EmailToUserPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailToUserPipe();
    expect(pipe).toBeTruthy();
  });
});
