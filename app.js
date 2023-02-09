const express=require('express');
const app=express();
// const port=5000;
const dotenv=require('dotenv');
dotenv.config({path:'./config/.env'});//Load.env file=>you can access anything from .env file using process.env
// let t=process.env //object
// const port=process.env.PORT||5000;
let port
// console.log(process.env, process.env.NODE_ENV);
// console.log(process.env.NODE_ENV == 'development')
if(process.env.NODE_ENV == 'development'){
    port=process.env.PORT1||6000;
}
else{
    port=process.env.PORT2||7000;
}


// app.post('/api/v1/bootcamp',(req,res)=>{
//     res.json({message:'Bootcamp got Created'});
// })

// app.get('/api/v1/bootcamp',(req,res)=>{
//     res.json({message:'All Bootcamp got Fetched'});
// })

app.get('/api/v1/bootcamp/:id',(req,res)=>{
    res.json({message:`Bootcamp ${req.params.id} got Fetched`});
})





app.listen(port,()=>{
    console.log(`Bootcamp app is running on port ${port} in ${process.env.NODE_ENV} mode`);
});