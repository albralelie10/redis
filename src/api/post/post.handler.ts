import { NextFunction, Request, Response } from "express";
import { Post,Posts,PostWithId,PostSchema } from "./post.model";
import { ZodError } from "zod";

export const getAllPosts=async(req:Request,res:Response<PostWithId[]>,next:NextFunction)=>{
    try{
        const response=await Posts.find()
        const users = await response.toArray()
        return res.json(users)
    }catch(err){
        return next(err)
    }
}

export const createPost=async(req:Request<{},PostWithId,Post>,res:Response,next:NextFunction)=>{
    try{
        const validateRequestBody= PostSchema.parse(req.body)
        const insertResult=await Posts.insertOne(validateRequestBody)
        if(!insertResult.acknowledged)throw new Error("Error inserting User")
        const newUser=await Posts.findOne({_id:insertResult.insertedId})
         return res.status(201).json(newUser)   
    }catch(err){
        if(err instanceof ZodError){
            res.status(422)            
        }
        return next(err)
    }
}

