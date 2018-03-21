/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

describe(`Category queries`, () => {
  const query = schema.getType(`Query`).getFields();
  before(reseed);

  describe(`get all`, () => {
    const { resolve: res } = query.getCategories;
    let data;
    before(async () => {
      data = await res();
    });
    it(`returns array of objects`, () => {
      data.should.be.an(`array`);
      data.every(el => el.should.be.an(`object`));
    });
    it(`includes mandatory fields`, () => {
      expect(data[0]).to.include.keys([ `id`, `name` ]);
    });
  });
});

describe(`Category mutations`, () => {
  const mutate = schema.getType(`Mutation`).getFields();
  beforeEach(reseed);

  describe(`create`, () => {
    const { resolve: res } = mutate.createCategory;
    const input = { name: `my new category` };
    let cat;
    before(async () => {
      cat = await res(null, { input });
    });
    it(`returns created entry as object`, () => {
      expect(cat).to.be.an(`object`).that.has.property(`name`, `my new category`);
    });
  });
});
