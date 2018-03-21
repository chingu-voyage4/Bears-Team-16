/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

describe(`Image mutations`, () => {
  const mutate = schema.getType(`Mutation`).getFields();
  beforeEach(reseed);

  describe(`create`, () => {
    const { resolve: res } = mutate.createImage;
    const input = { url: `the new image url`, recipe_id: 2 };
    let img;
    before(async () => {
      img = await res(null, { input });
    });
    it(`returns created entry as object`, () => {
      expect(img).to.be.an(`object`).that.has.property(`url`, `the new image url`);
    });
  });
});
