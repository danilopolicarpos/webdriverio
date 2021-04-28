const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');



Given("que eu esteja na pagina de login", async () => {
  await LoginPage.open()
});

When("realizar o login com sucesso", async () => {
  await LoginPage.login()
});

Then("vejo login efetuado com sucesso", async () => {
  await expect(SecurePage.flashAlert).toBeExisting();
});




