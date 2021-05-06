/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     get loading () { return $('[class="element"]') }

    async waitLoading() {
        let status = await (await this.loading).isDisplayed();
        while (status != false) {
          status = await (await this.loading).isDisplayed();
        }
      }

    open (path) {
        browser.maximizeWindow()
        return browser.url(`/${path}`)
    }
}
