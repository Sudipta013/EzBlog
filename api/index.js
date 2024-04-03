import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();

mongoose.connect(
    process.env.MONGO
).then(
    () => {
        console.log('MongoDB is connected');
    }
)
.catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log('Server is running on port 3000!!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes)

//middleware which gives us 4 things : err-error from input , next - used when go to next middleware
app.use((err,req, res,next) => {
    const statusCode = err.statusCode || 500; //if no statuscode then 500 or else err .. cant send a err without a status code
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});