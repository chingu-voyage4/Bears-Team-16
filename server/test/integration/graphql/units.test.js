/* eslint-disable no-undef */
import chai from "chai";
import { reseed, rollback, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`units`, () => {
  describe(`mutations`, () => {
    beforeEach(reseed);
    afterEach(rollback);

    it(`can create a record`, async () => {
      const { createUnit } = await request({
        // TODO check for relateions
        query: `
          mutation Mutation($newUnit: UnitInput) {
            createUnit(input: $newUnit) {
              id
              name
            }
          }
          `,
        variables: `{
          "newUnit": {
            "name":"my new Unit",
            "unit_system":"imperial"
          }
        }`,
      });
      createUnit.should.deep.include({
        id: (limits.units + 1).toString(),
        name: `my new Unit`,
      });
    });
  });
});

