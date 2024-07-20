import express from 'express'
import jwt from 'jsonwebtoken'
import {User,Account} from '../db.js'
import { JWT_SECRET } from '../config.js';
import {signinbody,signupbody,updateBody} from '../inputauth.js'
import {authMiddleware} from '../middleware.js'

export const userRouter = express.Router();


userRouter.post('/signup',async (req,res)=>{
    const body = req.body;

    const validInputs = signupbody.safeParse(body).success;
    const unique = await User.findOne({username: body.username})


    if(!validInputs || unique!=null){
        return res.status(411).json({
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

    const newAccount = await Account.create({
        userId: userId,
        balance: 10000*Math.random()+1
    })

    return res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

userRouter.post('/signin',async (req,res)=>{
    const body = req.body;
    const {success} = signinbody.safeParse(body);
    if(success){
        return res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    const existing =await User.findOne({
        username: body.username,
        password: body.password
    })

    if(existing==null){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const userId = existing._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    return res.status(200).json({
        token: token
    })
})



userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);
	
    return res.json({
        message: "Updated successfully"
    })
})

userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    return res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

