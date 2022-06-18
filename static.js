var express =require('express');
var app=express();
var PORT=3000;
var path=require('path');

app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res,next){
    res.render('home.ejs');
})

app.listen(PORT,function(err){
    if(!err) console.log(err);
    console.log("Server is  Listening on port",PORT);
})