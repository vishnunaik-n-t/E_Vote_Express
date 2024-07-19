const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json())
const PORT=process.env.PORT||3000;

const userRoutes = require('./routes/userRoutes');
// const candidateRoutes = require('./routes/candidateRoutes');

// Use the routers
app.get('/',(req,res)=>{
    res.send('well come to the world dude');
})
app.use('/user', userRoutes);
// app.use('/candidate', candidateRoutes);
app.listen(3000,()=>{
    console.log("listing on port no. 3000");
});