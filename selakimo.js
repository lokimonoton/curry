// var postmark=require('./postmark')
// postmark.mendapatkanServer(data=>{
//   data.forEach(lakim=>{
//     postmark.deleteServer(lakim.ID,function(){
//       console.log(lakim.name+" deleted")
//     })
//   })
// })
var koneksi=require('./koneksi')
koneksi.cari("codenvy",{username:"penasaranlakimlucu18"},function(data){
koneksi.hapus("codenvy",data[0]._id)
})