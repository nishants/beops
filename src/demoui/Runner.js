
const
    DEFAULT_TIMEOUT = 5000,
    {By, until} = require('selenium-webdriver');

const runDemoUiBuild = async function example({demoUITabText, demoUIPageTitle}, driver) {
  await driver.findElement(By.linkText(demoUITabText)).click();
  await driver.wait(until.titleIs(demoUIPageTitle), DEFAULT_TIMEOUT)
  // eval(require('pryjs').it);
};

module.exports = runDemoUiBuild;
