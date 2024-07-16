import express from "express";
import { mainRouter } from "./routes/index";
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/vi",mainRouter);

app.listen(3000,()=>{
    console.log('The sever is up and listening');
})