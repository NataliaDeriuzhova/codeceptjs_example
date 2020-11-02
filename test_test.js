Feature('CodeceptJS example');
 
Before(({ I }) => { // or Background
  I.amOnPage('https://www.npmjs.com/login');
});
 
Scenario('test login form', ({ I, docsPage }) => {
  docsPage.sendForm('hello@world.com','123456');
  I.see('username or password was invalid');
});