const Page = require('./page');
const timout = 150000
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnBuscar () { return $('//*[@id="root"]/div[1]/header/div/div[3]/button[1]/span[1]/span[2]') }
    get carrinho () {return $('//*[@id="root"]/div[1]/header/div/div[3]/button[2]/span[1]/span[2]')}
    get fieldBuscar (){ return $('//*[@id="root"]/div[1]/div[3]/div[1]/div/div/div/div/div/div/div/input')}
    get produto (){return $('div.searchBar__list')}
    get codigoProduto (){return $('//*[@id="root"]/div[1]/div[3]/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/main/div/div/div[1]/div[2]/span[2]/span')}
    get semResultado (){return $('//*[@id="root"]/div[1]/div[3]/div[1]/div/div/div/div/h6')}
    get btnAgregar (){return $('//*[@id="root"]/div/div[3]/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/main/div/div/div[1]/div[4]/button')}
    get produtoAgregado () {return $('//*[@id="root"]/div/div[2]')}
    get codigoteste () {return $('//*[contains(text(), "Kaiak fragancia masculina")]')}
    get btnRemover () {return $('//*[@id="scroll"]/div/div[1]/div/div[5]/div[2]/ul/li[2]/div/div[9]/button/i')}
    get btnEliminarCarrinho () {return $('//*[@id="root"]/div[1]/div[3]/div[3]/div/div[1]/main/div[1]/div/div/div[2]/div/button[2]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // Tranformar em um metodo  a busca por produto
    async realizarBusca() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("kaiak");
    }

    async realizarBuscaCodigo() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("22557");
    }

    async realizarBuscaInexistente() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("pokemonGO");
    }

    async agregarProduto() {
        await (await this.btnAgregar).click()
    }

    async msnProdutoAgregado() {
        await (await this.produtoAgregado).waitForClickable({timout});
    }

    async btnCarrinho() {
        await this.waitLoading()
        await (await this.carrinho).waitForClickable({timout});
        await (await this.carrinho).click()
    }

    async removerProduto(){
        await this.waitLoading()
        await (await this.codigoteste).waitForExist()
        await (await this.codigoteste).scrollIntoView();
        this.eliminarProdutoCarrinho() 
    }

    async eliminarProdutoCarrinho() {
        await (await this.btnRemover).waitForExist()
        await (await this.btnRemover).click()
        await this.waitLoading()
        await (await this.btnEliminarCarrinho).click()
    }


 
    /**
     * overwrite specifc options to adapt it to page object
     */
  
}

module.exports = new HomePage();
