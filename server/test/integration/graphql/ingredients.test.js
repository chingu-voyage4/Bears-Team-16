/* eslint-disable no-undef */
import chai from "chai";
import { reseed, rollback, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`ingredients`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`can query all records`, async () => {
      // TODO check relations
      const { ingredients } = await request({
        query: `
        {
          ingredients {
            id
            name
          }
        }
        `,
      });

      ingredients
        .should.be.an(`array`)
        .that.has.length(limits.ingredients)
        .and.all.include.keys([ `name`, `id` ]);
    });
  });
  describe(`mutations`, () => {
    beforeEach(reseed);
    afterEach(rollback);

    it(`can create a record`, async () => {
      const { createIngredient } = await request({
        // TODO check for relateions
        query: `
          mutation Mutation($newIngredient: IngredientInput) {
            createIngredient(input: $newIngredient) {
              id
              name
            }
          }`,
        variables: `{
          "newIngredient": {
            "name":"my new Ingredient"
          }
        }`,
      });
      createIngredient.should.deep.include({
        id: (limits.ingredients + 1).toString(),
        name: `my new Ingredient`,
      });
    });
  });
});
