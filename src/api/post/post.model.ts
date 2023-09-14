import * as z from "zod"
import {db} from "../../db"
import { WithId } from "mongodb"


export const PostSchema=z.object({
  title:z.z.string().min(1),
  content:z.string().min(1),
  user_authorId:z.string().min(1),
  post_category:z.array(z.object({category_name:z.string()})),
  created_At:z.date().default(new Date()),
  updated_At:z.date().default(new Date())
})

export type Post=z.infer<typeof PostSchema>
export type PostWithId=WithId<Post>
export const Posts=db.collection<Post>("posts")




// import mongoose, { SchemaTypes } from 'mongoose'

// const { Schema } = mongoose;

// // Modelo Post
// const PostSchema = new Schema({
//     title: { type: String },
//     content: { type: String, maxlength: 2000 },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date },
//     user_authorId: { type: Schema.Types.ObjectId, ref:'User' },
//     post_categoryId: [{ type:Schema.Types.ObjectId, ref:"Post"},],
//   });
  
//   export const Post = mongoose.model('Post', PostSchema);
  
//   // Modelo Category
//   const CategorySchema = new Schema({
//     category_name: { type: String },
//   });
  
//   export const Category = mongoose.model('Category', CategorySchema);