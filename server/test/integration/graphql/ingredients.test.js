/* eslint-disable no-undef */
import chai from "chai";
import { reseed, rollback, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`ingredients`, () => {
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
