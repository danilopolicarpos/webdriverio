
const Page = require('./page');
const timout = 4000
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#kc-login') }
    get btnAceptar () {return $('button.btn.background-orange')}
    get modal_login () { return $('div.modal-body.undefined') }
    get home (){return $('div.header__toolbar--wrapper-image.header__toolbar__box')}
    get btnEliminarPedido () {return $('button.btn.background-white.bnt-bottom-left.button-active-modal')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginPeru() {
        await (await this.inputUsername).setValue("2135533");
        await (await this.inputPassword).setValue("0");
        await (await this.btnSubmit).click();
    }

    async btnAceptar_test(){
        await (await this.btnAceptar).waitForClickable();
        await (await this.btnAceptar).click();
    }

    async eleminarPedido(){
        await (await this.btnEliminarPedido).waitForClickable();
        await (await this.btnAceptar).click();
    }

    async logonPeru(){
        try
        {
          await (await this.btnEliminarPedido).waitForDisplayed({timout})
          this.eleminarPedido()
          await (await this.modal_login).waitForDisplayed({timout})
          this.btnAceptar_test()
         
        }catch(error){
         console.log("nao tem o popup")
        }
    }

    async homePage(){
        await (await this.home).waitForClickable({timout})
        return this.home
    }

  

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?country=PE');
    }
}

module.exports = new LoginPage();
