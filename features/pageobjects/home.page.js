
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
    get fieldBuscar (){ return $('[type=text]')}
    get produto (){return $('div.searchBar__list')}
    get codigoProduto (){return $('[class="product-card__info__data--strong"]')}
    get semResultado (){return $('//*[@id="root"]/div/div[2]/div[1]/div/div/div/div/h6')}
    get btnAgregar (){return $('//*[@id="root"]/div/div[3]/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/main/div/div/div[1]/div[4]/button')}
    get produtoAgregado () {return $('//*[@id="root"]/div/div[2]')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // Tranformar em um metodo  a busca por produto
    async realizarBusca() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await this.waitLoading()
        await (await this.fieldBuscar).setValue("kaiak");
        await this.waitLoading()
    }

    async realizarBuscaCodigo() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await this.waitLoading()
        await (await this.fieldBuscar).setValue("22557");
        await this.waitLoading()
    }

    async realizarBuscaInexistente() {
        await this.waitLoading()
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await this.waitLoading()
        await (await this.fieldBuscar).setValue("pokemonGO");
        await this.waitLoading()
    }

    async agregarProduto() {
        await (await this.btnAgregar).click()
    }

    async msnProdutoAgregado() {
        await (await this.produtoAgregado).waitForClickable({timout});
    }

 
    /**
     * overwrite specifc options to adapt it to page object
     */
  
}

module.exports = new HomePage();
