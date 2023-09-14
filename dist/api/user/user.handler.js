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
exports.deleteUser = exports.addUser = exports.getAllUsers = void 0;
const user_model_1 = require("./user.model");
const mongodb_1 = require("mongodb");
const zod_1 = require("zod");
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = user_model_1.Users.find();
        const users = yield response.toArray();
        return res.json(users);
    }
    catch (err) {
        return next(err);
    }
});
exports.getAllUsers = getAllUsers;
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateResult = yield user_model_1.UserLocal.parse(req.body);
        const insertResult = yield user_model_1.Users.insertOne(validateResult);
        if (!insertResult.acknowledged)
            throw new Error("Error inserting User");
        const insertUser = yield user_model_1.Users.findOne({ _id: insertResult.insertedId });
        return res.status(201).json(insertUser);
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res.status(422);
        }
        return next(err);
    }
});
exports.addUser = addUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield user_model_1.Users.findOneAndDelete({ _id: new mongodb_1.ObjectId(id) });
        return res.status(200).json(response);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.handler.js.map