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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const user_model_1 = require("./user.model");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_model_1.Users.drop();
    }
    catch (error) { }
}));
describe('GET /users', () => {
    it('responds with an array of todos', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
            expect(response.body).toHaveProperty('length');
            expect(response.body.length).toBe(0);
        });
    }));
});
describe('POST /users', () => {
    it('response withc a Error if User is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .post('/users')
            .set('Accept', 'application/json')
            .send({
            nombre: "nidia",
            email: "",
            age: 22,
            somerandom: "112233"
        })
            .expect('Content-Type', /json/)
            .expect(422)
            .then((response) => {
            expect(response.body).toHaveProperty("message");
        });
    }));
    it('response withc a new instance of user', () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .post('/users')
            .set('Accept', 'application/json')
            .send({
            nombre: "nidia",
            email: "nidia@test.com",
            age: 22,
            password: "112233",
            user_configId: {}
        })
            .expect('Content-Type', /json/)
            .expect(201)
            .then((response) => {
            expect(response.body).toHaveProperty('_id');
        });
    }));
});
//# sourceMappingURL=user.test.js.map