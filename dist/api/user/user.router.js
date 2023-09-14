"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_handler_1 = require("./user.handler");
const routerUser = express_1.default.Router();
routerUser.route("/").get(user_handler_1.getAllUsers).post(user_handler_1.addUser);
routerUser.route("/:id").delete(user_handler_1.deleteUser);
exports.default = routerUser;
//# sourceMappingURL=user.router.js.map