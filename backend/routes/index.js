import express, { Router } from 'express'
import {userRouter} from './user'
import {accountRouter} from './account'

const mainRouter = express.Router();

mainRouter.use('/user', userRouter);

mainRouter.use('/account',accountRouter);

module.exports = mainRouter;