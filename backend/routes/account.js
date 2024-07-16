import express from 'express'
import {authMiddleware} from '../middleware'
import {Account} from '../db'

const accountRouter = express.Router();


accountRouter.get('/balance',authMiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
})

module.exports = {
    accountRouter
}