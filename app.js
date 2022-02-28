const express = require('express')
const app = express()
const { request } = require('https')
const port = process.env.PORT ||3000;
const fs = require('fs');



app.use(express.static('public'))

app.get('/loc', (request, response) => {
    console.log(request.params)
    var url_page = request.query;
    var string = JSON.stringify(url_page);
    var objectValue = JSON.parse(string);
    var get_authorization_code = objectValue['code'];
  
    console.log("Authorization Code: " + get_authorization_code);
  })


app.listen(port,()=>{
    console.log(`Running on port ${port}`)
})