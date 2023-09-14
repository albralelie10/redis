import { Router } from "express";
import { createPost, getAllPosts } from "./post.handler"

const postRouter=Router()

postRouter.route("/").get(getAllPosts).post(createPost)

export default postRouter;