import express from "express"
import {getAllUsers,addUser,deleteUser} from "./user.handler"
const routerUser=express.Router()


routerUser.route("/").get(getAllUsers).post(addUser)
routerUser.route("/:id").delete(deleteUser)



export default routerUser;