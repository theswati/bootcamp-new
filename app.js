const express=require('express');
const app=express();
// const port=5000;
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const port=process.env.PORT||5000;





app.listen(port,()=>{
    console.log(`Bootcamp app is running on port ${port} in ${process.env.NODE_ENV} mode`);
});