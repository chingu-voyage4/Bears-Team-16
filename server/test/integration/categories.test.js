/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, request } from "../helpers";
import { limits } from "../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`categories`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`can query all records`, async () => {
      const { categories } = await request({
        query: `
        {
          categories {
            id
            name
          }
        }
        `,
      });

      categories
        .should.be.an(`array`)
        .that.has.length(limits.categories)
        .and.all.include.keys([ `name`, `id` ]);
    });

    // TODO
    // describe("mutations", () => {

    // })
  });
});
