var express = require('express')
var app = express()
app.use(express.static('public'))
var axios=require('axios')
var crypto = require('crypto')
//untuk menjadikan json
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var koneksi=require('./koneksi')
app.get('/goal', function (req, res) {
  res.sendFile(__dirname+'/panda.html')
})
app.post('/simpan',jsonParser,function(req,res){
//   koneksi.simpan('codenvy',JSON.parse(req.body.objek))
// res.send('berhasil')
res.send("berhasil")
console.log(req.body)
  
})
app.post('/update',function(req,res){
  koneksi.updateId("codenvy",req.body.id,req.body.berubah)
res.send('updated')
  
})
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/penasaran.html")
  
})
app.get('/skripsi', function (req, res) {
  res.sendFile(__dirname+'/panda.html')
})
app.get('/codenvy',function(req,res){
  koneksi.cari('codenvy',{},function(data){
    res.send(data)
  })
})
app.get('/ecommerce',function(req,res){
  koneksi.cari('pertanyaanecommerce',{},function(data){
    res.send(data)
  })
})

//webhook mendapatkan notifikasi facebook
var menggunakan=require("./perang")
app.post('/facebook', jsonParser, function (req, res) {
  res.send("berhasil").status(200)
  console.log("berhasil")
  var cheerio = require('cheerio')
  var $ = cheerio.load(req.body.HtmlBody)
  // console.log(req.body.HtmlBody)
  // console.log("text"+req.body.TextBody)
  if($('a').eq(0).attr('href')!="https://codenvy.io/dashboard"){
  koneksi.cari("codenvy",{},data=>{
    console.log($('a').eq(0).attr('href'))
  menggunakan.masukPertamaCodenvy($('a').eq(0).attr('href'),data[data.length-1].username)
  })
}

})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port '+process.env.PORT)
})
