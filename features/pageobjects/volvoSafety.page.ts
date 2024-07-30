import { $, browser } from '@wdio/globals';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VolvoSafetyPage {

    get cookieDialog() {
        return $('.banner-actions-container');
    }

    get cookieAcceptBtn() {
        return $('#onetrust-accept-btn-handler');
    }

    async getVolvoLogo() {
        return await browser.$('#site-navigation').shadow$('#sitenav-topbar-wrapper').isDisplayed();
    }

    async handleCookieDialog() {
        try {
            await this.cookieAcceptBtn.waitForDisplayed({timeout: 2500,timeoutMsg: 'cookieAcceptBtn not displayed'});
            if(this.cookieDialog.isDisplayed()) {
                // await await this.cookieAcceptBtn.waitForDisplayed({timeout: 2500,timeoutMsg: 'cookieAcceptBtn not displayed'});
                await this.cookieAcceptBtn.click();
            }
        }
        catch (e) {
            console.log('accept cookie dialog not displayed');
        }
    }

}

export default new VolvoSafetyPage();
