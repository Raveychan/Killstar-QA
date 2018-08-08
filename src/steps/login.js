const {Given, Then, When} =  require('cucumber');

const openWebsite = require ('../support/openWebsite');
const clickButton = require ('../support/clickButton');
const waitFor = require ('../support/waitFor');
const isExisting = require('../support/isExisting');
const getUrl = require('../support/getUrl');
const setValue = require('../support/setValue');

Given(
    'I open the url https://www.killstar.com/',() => {
        openWebsite('https://www.killstar.com/');
    }
);

Then(
    'I wait for the page to load', () => {
        waitFor(1000);
    }
)

Then(
    'I click UK website button', () => {
        clickButton('.keep-site');
    }
)

Then(
    'I expect newsletter popup is shown', () => {
        isExisting('.keep-site');
    }
)

Then(
    'I close the newsletter popup', () => {
        waitFor(1000);
        clickButton('body > div.fancybox-wrap.fancybox-mobile.fancybox-type-html.fancybox-opened > div > a');
    }
)

Then(
    'I click on account button', () => {
        waitFor(1000);
        clickButton('span.account')
    }
);

Then(
    'I am shown a login option', () => {
        waitFor(1000);
        isExisting('#customer_login_link')
    }
);

Then(
    'I click on login', () => {
        waitFor(1000);
        clickButton('#customer_login_link')
    }
);

Then(
    'I enter my email', () => {
        waitFor(1000)
        setValue('#customer_email','sara.testingqa@gmail.com')
    }
);

Then(
    'enter my password', () => {
        waitFor(1000)
        setValue('#customer_password','TestingPassword111')
    }
);

Then(
    'I click sign in button', () => {
        clickButton('input.button:nth-child(1)');
    }
);

Then(
    'I click on account button again', () => {
        waitFor(1000);
        clickButton('span.account')
    }
);

Then(
    'I click logout', () => {
        waitFor(1000)
        clickButton('.account-container > a:nth-child(2)');
    }
)