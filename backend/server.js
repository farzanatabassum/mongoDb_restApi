const express=require('express');
const dotenv=require('dotenv').config();
const port=process.env.PORT||5000;
const app=express();
const goalRoute=require('./routes/goalRoutes');
app.use('/api/goals',goalRoute)
app.listen(port,()=>{
    console.log(`Starting port ${port}`);

})