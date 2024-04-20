import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === '')
    {
        //return res.status(400).json({ message: 'All fields are required' });
        //error handler from utils/error.js
        next(errorHandler(400,'All fields are required'));
    }

    const hashedpassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    });

    try {
        await newUser.save();
        res.json('Signup successful')
    } catch (error) {
        next(error); //error from middleware
    } 
} 

export const signin = async (req, res, next) => {
    const { email, password} = req.body;
    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400,'All fields are required'));
    }
    try {
        //email verification
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(400,'User Not Found'));
        }

        //password verification
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            return next(errorHandler(400,'Invalid Password'));
        }
        //creating token for auth
        const token = jwt.sign(
            {id: validUser._id},process.env.JWT_SECRET
        );
        //separating password from the rest information while returing the user
        const { password: pass,...rest} = validUser._doc;

        res.status(200).cookie('access_token', token,{
            httpOnly: true
        }).json(rest);

    } catch (error) {
        next(error);
    }
}
