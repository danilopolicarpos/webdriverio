const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given("que eu esteja na home com cn ativa", async () => {
  await LoginPage.open()
  await LoginPage.loginPeru()
  await LoginPage.logonPeru()
  await LoginPage.homePage()
});

When("realizar uma busca de produto por nome", async () => {
   await HomePage.realizarBusca();
});

When("realizar uma busca de produto por codigo", async () => {
    await HomePage.realizarBuscaCodigo();
 });

 When("realizar uma busca de produto inexistente", async () => {
   await HomePage.realizarBuscaInexistente();
});

Then("vejo o resultado da busca por nome", async () => {
    await expect(HomePage.produto).toBeExisting();
 });

 Then("vejo o resultado da busca por codigo", async () => {
    await expect(HomePage.codigoProduto).toBeExisting();
 });

 Then("vejo o resultado da busca para produto inexistente", async () => {
   await expect(HomePage.semResultado).toBeExisting();
});
 
