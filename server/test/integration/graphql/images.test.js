/* eslint-disable no-undef */
import chai from "chai";
import { reseed, rollback, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`images`, () => {
  describe(`mutations`, () => {
    beforeEach(reseed);
    afterEach(rollback);

    it(`can create a record`, async () => {
      const { createImage } = await request({
        // TODO check for relateions
        query: `
          mutation Mutation($newImage: ImageInput) {
            createImage(input: $newImage) {
              id
              url
            }
          }`,
        variables: `{
          "newImage": {
            "url":"my new Image",
            "recipe_id":4
          }
        }`,
      });
      createImage.should.deep.include({
        id: (limits.images + 1).toString(),
        url: `my new Image`,
      });
    });
  });
});
