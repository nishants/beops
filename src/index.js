require('chromedriver');

const
    fs = require('fs'),
    {Builder, By, Key, until} = require('selenium-webdriver'),
    DemoUIRunner = require("./demoui/Runner");

const
    CONFIG_FILE = "./config/config.json",
    config = (JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'))),
    username= "nishant.singh",
    password= "MlpEwqZaq321@";

(async function(){
  const
      driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get(config.dashboardURL);
    await driver.findElement(By.name("j_username")).sendKeys(username);
    await driver.findElement(By.name("j_password")).sendKeys(password);
    await driver.findElement(By.className("submit-button")).click();
    await driver.wait(until.titleIs(config.dashboardTitle), 5000);


    await DemoUIRunner(config.demoUI, driver);

  } finally {
    await driver.quit();
  }

})();


