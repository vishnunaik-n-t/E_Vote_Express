const express=require('express');
const app=express();
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json())
const PORT=process.env.PORT||300;

app.get('/',function(req,res){
    res.send("hello jarvis");
})

app.listen(3000,()=>{
    console.log("listing on port no. 3000");
});