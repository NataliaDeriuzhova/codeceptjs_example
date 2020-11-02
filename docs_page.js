const { I } = inject();
 
module.exports = {
  fields: {
    email: '#login_username',
    password: '#login_password'
  },
  submitButton: {css: '.button.button-reset[type=submit]'},
 
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}