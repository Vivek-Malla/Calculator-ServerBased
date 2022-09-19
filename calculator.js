const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}))

app.get("/",function(request,response){
    response.sendFile(__dirname +"/index.html");
});
app.post("/",function(request,response){
     var num1 = Number(request.body.num1);
     var num2 = Number(request.body.num2);
     var sum = num1 + num2;
     response.send(sum+ " is the result");
});
app.listen(3000,function(){
    console.log("server 3000");
});