import { NextFunction, Request, Response } from "express"
import {UserWithId,Users, User, UserLocal} from "./user.model"
import {  ObjectId } from "mongodb";
import { ZodError } from "zod";
import client from "../../redis"



export const getAllUsers = async (req: Request,res: Response<UserWithId[]>,next: NextFunction
  ) => {
    try {
      const key = "get-users";
      const cacheValue = await client.get(key);
      if (cacheValue) {
        const freshUsers = JSON.parse(cacheValue) as UserWithId[];
        console.log("CACHE HIT");
        return res.json(freshUsers);
      }
      console.log("CACHE MISS");
  
      const response = await Users.find();
      const users = await response.toArray();
  
      // Convertir el array de usuarios a una cadena JSON antes de almacenarlo en Redis
      const usersJson = JSON.stringify(users);
  
      // Almacenar en Redis
      await client.set(key, usersJson,"EX",60);
  
      return res.json(users);
    } catch (err) {
      return next(err);
    }
  };

export const addUser = async (req: Request<{},UserWithId,User>, res: Response<UserWithId>, next:NextFunction) => {
    try{
        
        const validateResult=await UserLocal.parse(req.body)
        const insertResult= await Users.insertOne(validateResult)
        console.log(insertResult.acknowledged)
        if(!insertResult.acknowledged)throw new Error("Error inserting User")
        const insertUser=await Users.findOne({_id:insertResult.insertedId}) as UserWithId
        return res.status(201).json(insertUser) 
    }catch(err){
        if(err instanceof ZodError ){
            res.status(422)
        }
        return next(err)
    }
};

export const deleteUser=async(req:Request<ObjectId>,res:Response,next:NextFunction)=>{

       try{
        const {id}=req.params
        const response= await Users.findOneAndDelete({_id:new ObjectId(id)})
        return res.status(200).json(response)
       }catch(err){
        next(err)
       }
  
}
