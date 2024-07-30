import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals';
import { URL } from '../../environment/url.js';
import volvoSafetyPage from '../pageobjects/volvoSafety.page.js';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.deleteCookies();
    await browser.url(URL.volvoSafetyPage);
    await volvoSafetyPage.handleCookieDialog();
});

Then(/^compare against the screenshot$/, async () => {
    await expect(browser).toMatchScreenSnapshot('partialPage');
});

Then(/^ensure the page has volvo logo displayed$/, async function() {
    await expect(await (await volvoSafetyPage.getVolvoLogo())).toBe(true);
})

