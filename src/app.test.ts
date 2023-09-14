import request from 'supertest';
import app from './app';


describe('app', () => {
  test('responds with a not found message', (done) => {
     request(app)
      .get('/what-is-this-even')
      .expect(404, done);
  });
});

describe('GET /', () => {
  test('responds with a json message', (done) => {
     request(app)
      .get('/')
      .expect(200, {
        msg: "START HOME PAGE",
      }, done);
  });
});
