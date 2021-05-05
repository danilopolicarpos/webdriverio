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
    get fieldBuscar (){ return $('input.sc-fznKkj.ktBkyb.searchBar__input__input')}
    get produto (){return $('div.searchBar__list')}
    get codigoProduto (){return $('//*[@id="root"]/div[1]/div[3]/div[1]/div/div/div/div/div[2]/div/div[3]/div/div[1]/main/div/div/div[1]/div[2]/span[2]/span')}
    get semResultado (){return $('#root > div.page.home > div.page__wrapper-content > div.page__searchBar--open > div > div > div > div > h6')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // Tranformar em um metodo  a busca por produto
    async realizarBusca() {
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("kaiak");
    }

    async realizarBuscaCodigo() {
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("13120");
    }

    async realizarBuscaInexistente() {
        await (await this.btnBuscar).waitForClickable({timout});
        await (await this.btnBuscar).click()
        await (await this.fieldBuscar).setValue("pokemonGO");
    }

 
    /**
     * overwrite specifc options to adapt it to page object
     */
  
}

module.exports = new HomePage();
