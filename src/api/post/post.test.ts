import request from "supertest"
import {Posts} from "./post.model"
import app from "../../app"

beforeAll(async()=>{
    try{
    await Posts.drop()
    }catch(err){}
})

describe("GET /posts",()=>{
    it("response with array of todos",async()=>
        request(app)
        .get("/posts")
        .set("Accept","application/json")
        .expect("Content-Type",/json/)
        .expect(200)
        .then((response)=>{
            expect(response.body).toHaveProperty("length")
            expect(response.body.length).toBe(0)
        })
        
    )
})

describe("POST /posts",()=>{
    test("response with a with a Error if Post content is not valid",()=>
    request(app)
    .post("/posts")
    .set("Accept","application/json")
    .send({
        title:"Title 1",
        content:"lorenipusm",
        post_categorys:[],
        created_At:Date.now(),
        updated_At:Date.now(),
    })
    .then(response=>{
        expect(response.statusCode).toEqual(422)
        expect(response.body).toHaveProperty("message")
        console.log(response.body.message)
    })
    )
})






