"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { LOCAL_URI, PROD_URI } = process.env;
let uri_connection = LOCAL_URI ? LOCAL_URI : PROD_URI;
exports.client = new mongodb_1.MongoClient(uri_connection);
exports.db = exports.client.db();
//# sourceMappingURL=db.js.map