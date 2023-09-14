"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
describe('app', () => {
    test('responds with a not found message', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/what-is-this-even')
            .expect(404, done);
    });
});
describe('GET /', () => {
    test('responds with a json message', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get('/')
            .expect(200, {
            msg: "START HOME PAGE",
        }, done);
    });
});
//# sourceMappingURL=app.test.js.map