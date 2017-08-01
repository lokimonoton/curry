var argv = require('yargs').argv;
if(argv.masukc9){
  masukC9(argv.masukc9)
}
function masukC9(projectName){
   var webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;
var chrome = require("selenium-webdriver/chrome");

var options = new chrome.Options();
options.setChromeBinaryPath("/usr/bin/chromium-browser");
options.addArguments(["--no-sandbox"]);
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();
  driver.manage().window().setSize(1000, 1000);
  driver.get('https://www.c9.io/login');
  driver.findElement(By.id('id-username')).sendKeys("slafe1@yandex.com");
  driver.findElement(By.id('id-password')).sendKeys("plokotoklucu");
  driver.findElement(By.id('id-password')).sendKeys(webdriver.Key.ENTER);
  driver.sleep(10000)
driver.get("https://ide.c9.io/kolotibablo/"+projectName)
  driver.sleep(3000000)
    driver.quit()

  
}