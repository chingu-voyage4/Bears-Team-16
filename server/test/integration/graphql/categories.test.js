/* eslint-disable no-undef */
import chai from "chai";
import { reseed, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`categories`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`can query all records`, async () => {
      // TODO check relations
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
  });

  describe(`mutations`, () => {
    beforeEach(reseed);

    it(`can create a record`, async () => {
      const { createCategory } = await request({
        query: `
          mutation Mutation($newCategory: CategoryInput) {
            createCategory(input: $newCategory) {
              id
              name
            }
          }`,
        variables: `{
          "newCategory": {
          "name":"my new Category"
          }
        }`,
      });
      createCategory.should.deep.include({
        id: (limits.categories + 1).toString(),
        name: `my new Category`,
      });
    });
  });
});
