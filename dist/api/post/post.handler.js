"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getAllPosts = void 0;
const post_model_1 = require("./post.model");
const zod_1 = require("zod");
const getAllPosts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield post_model_1.Posts.find();
        const users = yield response.toArray();
        return res.json(users);
    }
    catch (err) {
        return next(err);
    }
});
exports.getAllPosts = getAllPosts;
const createPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateRequestBody = post_model_1.PostSchema.parse(req.body);
        const insertResult = yield post_model_1.Posts.insertOne(validateRequestBody);
        if (!insertResult.acknowledged)
            throw new Error("Error inserting User");
        const newUser = yield post_model_1.Posts.findOne({ _id: insertResult.insertedId });
        return res.status(201).json(newUser);
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res.status(422);
        }
        return next(err);
    }
});
exports.createPost = createPost;
//# sourceMappingURL=post.handler.js.map