var express = require('express');
var app =  express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req, res){
    res.send('API APP ROOT');
    
});

app.listen(PORT,function(){
    console.log('Expresss Listening on port:'+ PORT + '!');
    
});