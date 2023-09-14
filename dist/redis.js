"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redisClient = new ioredis_1.default({
    host: process.env.PORT || 'localhost',
    port: 6379,
    // Otras opciones de configuración de conexión si es necesario
});
exports.default = redisClient;
//# sourceMappingURL=redis.js.map