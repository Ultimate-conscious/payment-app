import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../db'
import { JWT_SECRET } from '../config';
import {signinbody,signupbody} from '../inputauth'

const userRouter = express.Router();


userRouter.get('/signup',async (req,res)=>{
    const body = req.body;

    const validInputs = signupbody.safeParse(body).success;
    const unique = await User.findOne({username: body.username})

    if(!validInputs || unique!=null){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    
    const newUser = await User.create({
        username :body.username,
        password: body.password,
        firstName:body.firstName,
        lastName:body.lastName
    })
    const userId = newUser._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

userRouter.post('/signin',async (req,res)=>{
    const body = req.body;
    const {success} = signinbody.safeParse(body);
    if(success){
        res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const existing =await User.findOne({
        username: body.username,
        password: body.password
    })

    if(existing==null){
        res.status(411).json({
            message: "Error while logging in"
        })
    }

    const userId = existing._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.status(200).json({
        token: token
    })
})


module.exports = userRouter;