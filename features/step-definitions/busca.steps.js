const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

Given("que eu esteja na home com cn ativa", async () => {
  await LoginPage.open()
  await LoginPage.loginPeru()
  await LoginPage.logonPeru()
  await LoginPage.homePage()
  await LoginPage.vitrines()
  await LoginPage.logoHome()
});

When("com um produto adicionado no carrinho", async () => {
   await HomePage.realizarBuscaCodigo();
   await HomePage.agregarProduto();
   await HomePage.btnCarrinho();

});

When("remover o produto no carrinho", async () => {
   await HomePage.removerProduto()
});

When("realizar uma busca de produto por nome", async () => {
   await HomePage.realizarBusca();
});

When("realizar uma busca de produto por codigo", async () => {
    await HomePage.realizarBuscaCodigo();
 });

 When("realizo uma busca de produto por codigo", async () => {
   await HomePage.realizarBuscaCodigo();
});

 When("realizar uma busca de produto inexistente", async () => {
   await HomePage.realizarBuscaInexistente();
});

When("agregar o produto ao carrinho", async () => {
   await HomePage.agregarProduto();
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

Then("vejo a mensagem produto agregado com sucesso", async () => {
   await HomePage.msnProdutoAgregado()
});
 
Then("o produto não é mais apresentado", async () => {
   await HomePage.removerProduto()
});
