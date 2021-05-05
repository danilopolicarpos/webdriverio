const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');

Given("que eu esteja na pagina de login do GSP Peru", async () => {
  await LoginPage.open()
});
  
When("realizar o login com sucesso", async () => {
  await LoginPage.loginPeru()
});

Then("vejo login efetuado com sucesso", async () => {
 await LoginPage.logonPeru()
 await LoginPage.homePage()

});




