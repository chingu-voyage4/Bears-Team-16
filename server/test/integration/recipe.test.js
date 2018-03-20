/* eslint-disable no-undef */
import chai from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

chai.use(require(`chai-http`));
const { expect } = chai;
const recipes = schema.getType(`Query`).getFields().recipes.resolve;

describe(`Recipe`, () => {
  before(async () => reseed());
  describe(`query:recipes`, () => {
    it(`without params, returns an array of recipes with correct fields`, () =>
      recipes(null, {}).then(data => {
        data.should.not.be.an(`string`);
        data.should.be.an(`array`);
        [
          `id`,
          `title`,
          `description`,
          `author`,
          `prep_time`,
        ].forEach(prop => {
          data.should.all.have.property(prop);
        });
      }));
  });
});
