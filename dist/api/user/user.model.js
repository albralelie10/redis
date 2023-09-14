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
exports.Users = exports.UserLocal = void 0;
const z = __importStar(require("zod"));
const db_1 = require("../../db");
exports.UserLocal = z.object({
    nombre: z.string().min(1),
    email: z.string().min(1),
    age: z.number(),
    password: z.string().min(1),
    role: z.enum(["REGISTER_USER", "ADMIN"]).default("REGISTER_USER"),
});
const ErrorMsg = z.object({
    msg: z.string().min(1),
});
exports.Users = db_1.db.collection("users");
// const { Schema } = mongoose;
// // Enumeración Role
// const RoleEnum = ['REGISTER_USER', 'ADMIN'];
// // Enumeración Theme
// const ThemeEnum = ['DARK', 'WHITE'];
// // Modelo UserConfig
// const UserConfigSchema = new Schema({
//   emailUpdates: { type: Boolean, default: false },
//   theme: { type: String, enum: ThemeEnum, default: 'WHITE' },
// });
// export const UserConfig = mongoose.model('UserConfig', UserConfigSchema);
// // Modelo User
// const UserSchema = new Schema({
//   nombre: { type: String,require:true },
//   email: { type: String, unique: true,require:true },
//   age: { type: Number ,require:true},
//   password: { type: String,require:true },
//   role: { type: String, enum: RoleEnum, default: 'REGISTER_USER' },
//   post: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
//   user_configId: { type: String, unique: true, ref:'UserConfig' },
// });
// export const User = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map