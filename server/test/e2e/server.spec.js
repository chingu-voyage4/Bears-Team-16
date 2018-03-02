import { expect } from 'chai';
import request from 'supertest';
import { app } from '../../src';
// Example test
describe(`GET /`, () => {
  it(`should return status 200`, () =>
    request(app)
      .get(`/`)
      .send()
      .expect(200));
  it(`should return 'Howdy'`, () =>
    request(app)
      .get(`/`)
      .send()
      .then(res => {
        expect(res.body).to.equal(`Howdy`);
      }));
});
