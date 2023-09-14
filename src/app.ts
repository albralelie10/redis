import routerUser from "./api/user/user.router"
import express from "express"
import { Response,Request } from "express";
import * as middlewares from './middlewares';
import cors from "cors"
import postRouter from "./api/post/post.router";

const app=express()

app.use(cors({
    origin:"*",
    methods:["GET","DELETE","PUT","POST","OPTIONS"]
}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/users",routerUser);
app.use("/posts",postRouter)
app.use(middlewares.errorHandler)

app.get("/",(req:Request,res:Response)=>{
    return res.json({msg:"START HOME PAGE"})
})

export default app;
