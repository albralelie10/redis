"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = exports.PostSchema = void 0;
const z = __importStar(require("zod"));
const db_1 = require("../../db");
exports.PostSchema = z.object({
    title: z.z.string().min(1),
    content: z.string().min(1),
    user_authorId: z.string().min(1),
    post_category: z.array(z.object({ category_name: z.string() })),
    created_At: z.date().default(new Date()),
    updated_At: z.date().default(new Date())
});
exports.Posts = db_1.db.collection("posts");
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
//# sourceMappingURL=post.model.js.map