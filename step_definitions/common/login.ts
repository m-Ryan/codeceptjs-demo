import { NORMAL_USER } from '../../config/accounts';

const { I } = inject();

Given('I logged into a normal user account', () => {
  I.amOnPage('/login');
  I.fillField('phone', NORMAL_USER.phone);
  I.fillField('password', NORMAL_USER.password);
  I.click('登 录');
});
