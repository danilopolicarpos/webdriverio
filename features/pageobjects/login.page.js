const Page = require('./page');

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
    get modal_login () { return $('div.modal-body.undefined') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginPeru() {
        await (await this.inputUsername).setValue("2135533");
        await (await this.inputPassword).setValue("0");
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('?country=PE');
    }
}

module.exports = new LoginPage();
