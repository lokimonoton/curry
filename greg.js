var koneksi=require("./koneksi")
var postmark=require("./postmark")
postmark.buatServer("moassn","http://panda-kolotibablo.c9users.io/facebook",data=>{
    buatFacebook(data.InboundAddress,"rakim lakim")
})
// postmark.mendapatkanServer(data=>{
//     console.log(data)
// })
// login("500c1a3b59f6cb4cf9a9935b06399f1f@inbound.postmarkapp.com")
function login(email){
    var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get("https://twitter.com/login");
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/fieldset/div[1]/input')).sendKeys(email);
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/fieldset/div[2]/input')).sendKeys("plokotoklucu");
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/div[2]/button')).click();
driver.sleep(5000)
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('arachni.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
driver.quit().then(function(){
  console.log("apakahloginbisa?")
//   koneksi.simpan("codenvy",{username:username})
})
}
function apaYangTerjadi(url){
    var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get(url);
driver.sleep(5000)
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('berasil.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
driver.sleep(2000)
driver.quit().then(function(){
  console.log("kitalihatbersama")
//   koneksi.simpan("codenvy",{username:username})
})
}
function buatFacebook(email,fullname){
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .usingServer('http://localhost:4444/wd/hub')
    .build();
driver.manage().window().setSize(1000, 1000);
driver.get('https://www.facebook.com/signup');
driver.sleep(5000)
driver.findElement(By.xpath('//input[@id="u_0_1"]')).sendKeys(fullname);
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="u_0_3"]')).sendKeys(fullname+"sampan");
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="u_0_6"]')).sendKeys(email);
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="u_0_9"]')).sendKeys(email);
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="u_0_d"]')).sendKeys("Pl0k0t0klucu");
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="day"]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="day"]/option[3]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="month"]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="month"]/option[9]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="year"]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="year"]/option[34]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//*[@id="u_0_h"]')).click();
driver.sleep(5000)
driver.findElement(By.xpath('//button[@id="u_0_l"]')).click();
driver.sleep(5000)
driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('bismillahfacebook.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);
driver.quit().then(function(){
  console.log("brasil")
//   koneksi.simpan("codenvy",{username:username})
})

}