 Feature('DM');

Scenario('Test for reg.ru', async ({ I }) => {
  I.amOnPage('https://www.reg.ru/web-sites/website-builder/');
  let firstValue = await I.grabTextFrom ('.b-plans-pillar__item_type_infinite .b-money-amount');
  I.click('.b-plans-pillar__item_type_infinite .b-button');
  I.wait(5);
  let secondValue = await I.grabTextFrom('.order-footer-price__price');
  let firstValueCleanInt = +firstValue.replace(/\D/g, "");
  let secondValueCleanInt = +secondValue.replace(/\D/g, "");
  let assert = require('assert');
  assert.equal(firstValueCleanInt, secondValueCleanInt)
});

