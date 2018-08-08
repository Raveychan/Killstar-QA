// const { Given, And, When, Then } = require('cucumber');

// const openWebsite = require ('../support/openWebsite');
// const clickButton = require ('../support/clickButton');
// const waitFor = require ('../support/waitFor');
// const isExisting = require('../support/isExisting');
// const getUrl = require('../support/getUrl');

// Given(
//     'I open the url https://www.killstar.com/',() => {
//         openWebsite('https://www.killstar.com/');
//     }
// );

// Then(
//     'I wait for the page to load', () => {
//         waitFor(1000);
//     }
// )

// Then(
//     'I click UK website button', () => {
//         clickButton('.keep-site');
//     }
// )

// Then(
//     'I expect newsletter popup is shown', () => {
//         isExisting('.keep-site');
//     }
// )

// Then(
//     'I close the newsletter popup', () => {
//         waitFor(1000);
//         clickButton('body > div.fancybox-wrap.fancybox-mobile.fancybox-type-html.fancybox-opened > div > a');
//     }
// )
// Given(
//     'I click NEW button', () => {
//         clickButton('div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)');
//     }
// )
// Then(
//     'I expect submenu to open', () => {
//         waitFor(1000);
//         isExisting('div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1)');
//     }
// )
// Then(
//     'I click womans clothing', () => {
//         waitFor(1000);
//         clickButton('div.column-3:nth-child(4) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)');
//     }
// )
// Then(
//     'I expect to go to exact website {string}', (url) => {
//         waitFor(1000);
//         getUrl(url);
//     }
// )