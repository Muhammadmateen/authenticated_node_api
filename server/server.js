

var express = require("express");
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();

//Static Files Path
var componentsPath = path.resolve(__dirname,"../client");
app.use(express.static(componentsPath));


//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(logger('tiny'),function(req,res,next)
{
    //console.log("Requested Method : "+req.method +" and Body "+JSON.stringify(req.params.email));
    //console.log("Requested Method : "+req.method +" and Body "+JSON.stringify(req.body));
    //console.log("Requested Url headers",req.headers['auth']);
    console.log("Requested Method : ",req.method);
    console.log("Requested Url : ",req.url);

    //console.log("Headers Data  : ",req.headers['auth']);
    console.log("Headers Data  : ",req.headers['auth']);

    next();
});



app.use(function(req,res,next)
{

    console.log("Middle ware call");
    next();
});



app.post("/signup",function(req,res)
{
            console.log("Request in Signup route : ",req.body);

        res.send(req.body);
})

app.get('/signin',function(req,res)
{
        //console.log("Request in signin route : ",req.query.email);
        console.log("Request in signin route : ",req.query.email);
        res.send("Done signin");
})

app.delete('/profile/:name/:age',function(req,res)
{

    console.log("Request in profile Delete route : ",req.params.name);
    console.log("Request in profile Delete route : ",req.params.age);
    res.send("Done signin");

})

app.put("/home",function(req,res)
{
    console.log("Request in put Home route : ",req.body);
    //console.log("Request in put Home route : ",req.body);
    res.send("Done signin");

})


//Set port
app.set('port',process.env.port || 3000);
app.listen(app.get('port'),function()
{
    console.log("App is running on port : ",app.get('port'));
})