import mongoose, { SchemaTypes } from 'mongoose'
import * as z from "zod"
import {db} from "../../db"
import { WithId } from 'mongodb';

export  const UserConfigLocal= z.object({
  emailUpdates:z.boolean().default(false),
  theme:z.enum(["WHITE","DARK"]).default("WHITE")
})
export type UserConfig=z.infer<typeof UserConfigLocal>

export const UserLocal = z.object({
  nombre: z.string().min(1),
  email: z.string().min(1),
  age: z.number(),
  password: z.string().min(1),
  role: z.enum(["REGISTER_USER", "ADMIN"]).default("REGISTER_USER"),
  user_configId: UserConfigLocal
});

export type User=z.infer<typeof UserLocal>
export type UserWithId=WithId<User>
export const Users=db.collection<User>("users")
Users.createIndex({ email: 1 }, { unique: true })




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

