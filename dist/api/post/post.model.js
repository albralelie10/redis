"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.Post = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
// Modelo Post
const PostSchema = new Schema({
    title: { type: String },
    content: { type: String, maxlength: 2000 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    user_authorId: { type: Schema.Types.ObjectId, ref: 'User' },
    post_categoryId: [{ type: Schema.Types.ObjectId, ref: "Post" },],
});
exports.Post = mongoose_1.default.model('Post', PostSchema);
// Modelo Category
const CategorySchema = new Schema({
    category_name: { type: String },
});
exports.Category = mongoose_1.default.model('Category', CategorySchema);
//# sourceMappingURL=post.model.js.map