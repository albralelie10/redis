"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_handler_1 = require("./post.handler");
const postRouter = (0, express_1.Router)();
postRouter.route("/").get(post_handler_1.getAllPosts).post(post_handler_1.createPost);
exports.default = postRouter;
//# sourceMappingURL=post.router.js.map