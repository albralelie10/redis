import request from "supertest";
import app from "../../app"
import { Users } from "./user.model";

beforeAll(async () => {
    try {
      await Users.drop();
    } catch (error) {}
  });


  describe('GET /users', () => {
    it('responds with an array of todos', async () =>
      request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toHaveProperty('length');
          expect(response.body.length).toBe(0);
        }),
    );
  });


  describe('POST /users', () => {
    it('response withc a Error if User is invalid', async () =>
      request(app)
        .post('/users')
        .set('Accept', 'application/json')
        .send({
          nombre:"nidia",
          email:"",
          age:22,
          somerandom:"112233"
      })
        .expect('Content-Type', /json/)
        .expect(422)
        .then((response) => {
          expect(response.body).toHaveProperty("message");
        }),
    );

      it('response withc a new instance of user', async () =>
      request(app)
        .post('/users')
        .set('Accept', 'application/json')
        .send({
          nombre:"nidia",
          email:"nidia@test.com",
          age:22,
          password:"112233",
          user_configId:{}
      })
        .expect('Content-Type', /json/)
        .expect(201)
        .then((response) => {
          expect(response.body).toHaveProperty('_id')
        }),
    );
  });


  

  



