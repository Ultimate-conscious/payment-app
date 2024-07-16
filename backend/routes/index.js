import express, { Router } from 'express'
import {userRouter} from './user'

const mainRouter = express.Router();

mainRouter.use('/user', userRouter);

module.exports = mainRouter;