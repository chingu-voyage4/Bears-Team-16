/* eslint-disable no-undef */
import chai from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

describe(`Recipe queries`, () => {
  const query = schema.getType(`Query`).getFields();
  before(reseed);
  describe(`get one by id`, () => {
    const { resolve: res } = query.recipe;
    let data;
    before(async () => { data = await res(null, { id: 2 }); });
    it(`returns a recipe object with id:5`, () => {
      data.should.be.an(`object`).that.has.property(`id`, 2);
    });
    it(`includes all mandatory fields`, () => {
      data.should.include.keys([
        `id`,
        `title`,
        `prep_time`,
        `description`,
      ]);
    });
  });

  describe(`get all`, () => {
    const { resolve: res } = query.recipes;
    let data;
    before(async () => { data = await res(); });
    it(`returns array of recipe objects`, () => {
      data.should.be.an(`array`);
      data.every(el => el.should.be.an(`object`));
    });
  });
});
