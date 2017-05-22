var postmark=require('./postmark')
postmark.mendapatkanServer(data=>{
  data.forEach(lakim=>{
    postmark.deleteServer(lakim.ID,function(){
      console.log(lakim.name+" deleted")
    })
  })
})