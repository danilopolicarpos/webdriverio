
const Page = require('./page');
const timout = 150000
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
    get home (){return $('//*[@id="root"]/div/header/div/div[2]/a')}
    get btnEliminarPedido () {return $('button.btn.background-white.bnt-bottom-left.button-active-modal')}
    get vitrine (){return $('//*[@id="root"]/div/div[3]/div[3]/div/div[1]/main/section/footer/div/h6')}
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
        await (await this.btnEliminarPedido).waitForClickable({timout});
        await (await this.btnAceptar).click();
    }

    async logonPeru(){
        try
        {
         this.btnAceptar_test()  
         this.eleminarPedido() 
            }
         catch(error){
            console.log("passou aqui")
           
        }
    }

    async homePage(){
        await this.waitLoading()
        await (await this.home).waitForClickable({timout})
        return this.home
    }

    async vitrines(){
        await (await this.vitrine).isDisplayed({timout})
        return this.vitrine
    }



  

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?country=PE');
    }
}

module.exports = new LoginPage();
