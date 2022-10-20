const express=require('express');
const colors=require('colors')
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv=require('dotenv').config();
const connectDB=require('./config/db');
const port=process.env.PORT||5000;
connectDB();

const app=express();
app.use(express.json())
const goalRoute=require('./routes/goalRoutes');
app.use('/api/goals',goalRoute)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Starting port ${port}`);

})