/* eslint-disable no-undef */
import chai from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

describe(`User queries`, () => {
  const query = schema.getType(`Query`).getFields();
  before(reseed);

  describe(`get one by id`, () => {
    const { resolve: res } = query.user;
    let data;
    before(async () => {
      data = await res(null, { id: 2 });
    });
    it(`returns an object with correct key value`, () => {
      data.should.be.an(`object`).that.has.property(`id`, 2);
    });
    it(`includes all mandatory fields`, () => {
      data.should.include.keys([
        `id`,
        `email`,
        `password`,
        `fname`,
        `lname`,
        `unit_system`,
      ]);
    });
  });

  describe(`get all`, () => {
    const { resolve: res } = query.users;
    let data;
    before(async () => {
      data = await res();
    });
    it(`returns array of objects`, () => {
      data.should.be.an(`array`);
      data.every(el => el.should.be.an(`object`));
    });
  });
});

describe(`User mutations`, () => {
  const mutate = schema.getType(`Mutation`).getFields();
  beforeEach(reseed);

  describe(`create`, () => {
    const { resolve: res } = mutate.createUser;
    let user;
    const input = {
      email: `email@email.com`,
      password: `12354`,
      fname: `First`,
      lname: `Second`,
    };
    before(async () => {
      user = await res(null, { input });
    });
    it(`returns created entry as object`, () => {
      user.should.be.an(`object`);
    });
    it(`response has automatically created fields`, () => {
      user.should.include.keys([
        `id`,
        `unit_system`,
        `created_at`,
        `updated_at`,
      ]);
    });
  });
});
