const { I } = inject();
// Add in your custom step files

Given('I have an account', () => {});

When('I visit login page', () => {
  I.amOnPage('/login');
});

Then(
  'I try to login with {string} and {string}',
  (phone: string, password: string) => {
    console.log('phone, password', phone, password);

    I.fillField('phone', phone);
    I.fillField('password', password);
    I.click('.ant-btn');
  }
);

Then('I logined {string}', (status: string) => {
  if (status === 'success') {
    I.see('后台管理');
  }
  if (status === 'password error') {
    I.see('密码错误');
  }

  if (status === 'not exist') {
    I.see('用户不存在');
  }
});
