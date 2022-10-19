const express=require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv=require('dotenv').config();
const port=process.env.PORT||5000;
const app=express();
app.use(express.json())
const goalRoute=require('./routes/goalRoutes');
app.use('/api/goals',goalRoute)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Starting port ${port}`);

})