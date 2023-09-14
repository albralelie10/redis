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
const post_model_1 = require("./post.model");
const app_1 = __importDefault(require("../../app"));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield post_model_1.Posts.drop();
    }
    catch (err) { }
}));
describe("GET /posts", () => {
    it("response with array of todos", () => __awaiter(void 0, void 0, void 0, function* () {
        return (0, supertest_1.default)(app_1.default)
            .get("/posts")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
            expect(response.body).toHaveProperty("length");
            expect(response.body.length).toBe(0);
        });
    }));
});
describe("POST /posts", () => {
    test("response with a with a Error if Post content is not valid", () => (0, supertest_1.default)(app_1.default)
        .post("/posts")
        .set("Accept", "application/json")
        .send({
        title: "Title 1",
        content: "lorenipusm",
        post_categorys: [],
        created_At: Date.now(),
        updated_At: Date.now(),
    })
        .then(response => {
        expect(response.statusCode).toEqual(422);
        expect(response.body).toHaveProperty("message");
        console.log(response.body.message);
    }));
});
//# sourceMappingURL=post.test.js.map