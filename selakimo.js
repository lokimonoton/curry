// // var postmark=require('./postmark')
// // postmark.mendapatkanServer(data=>{
// //   data.forEach(lakim=>{
// //     postmark.deleteServer(lakim.ID,function(){
// //       console.log(lakim.name+" deleted")
// //     })
// //   })
// // })
// var koneksi=require('./koneksi')
// koneksi.cari("codenvy",{},function(data){
// data.shift()
// for(var i=0;i<data.length;i++){
   
// cekCodenvy(data[i].username,data[i]._id)
// }

// })

// function cekCodenvy(username,id){
//       var webdriver = require('selenium-webdriver'),
//       By = webdriver.By,
//       until = webdriver.until;
// console.log(username)
//   var driver = new webdriver.Builder()
//       .forBrowser('chrome')
//       // .usingServer('http://localhost:4444/wd/hub')
//       .build();
//   driver.manage().window().setSize(1000, 1000);
// driver.get('https://www.codenvy.io/');
// driver.sleep(10000)
// driver.findElement(By.css('#username')).sendKeys(username);
// driver.findElement(By.css('input[type="password"]')).sendKeys("plokotoklucu1");
// driver.findElement(By.css('input[type="password"]')).sendKeys(webdriver.Key.ENTER);
// driver.sleep(10000)
// driver.getCurrentUrl().then(function(data){
//     if(data.indexOf("https://codenvy.io/dashboard/#/")>-1){
//         console.log("yeah "+username)
//         driver.findElement(By.css(".ng-binding.flex")).click()
// driver.sleep(2000)
// driver.findElements(By.css(".navbar-click-area")).then(function(data){
//     data[4].getText().then(function(dara){
//         console.log(dara)
//     })
//     data[4].click()
// })
// driver.sleep(5000)
// driver.quit();
//     }
//     else{
//         koneksi.hapus("codenvy",id)
//         console.log("no "+username)
//         driver.quit()
//     }
// })

// }
var postmark=require("./postmark")
postmark.mendapatkanServer(function(data){
    console.log(data)
})