/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, request } from "../helpers";
import { limits } from "../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`errors`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`fails with status 400 if queried with nonexistant field`, async () => {
      const { message, status } = await request({
        query: `
        {
          categories {
            title
          }
        }
        `,
      });
      expect(status).to.equal(400);
      expect(message)
        .to.have.string(`Cannot query field`)
        .and.to.have.string(`title`);

      // status.should.be(400);
    });

    // TODO
    // describe("mutations", () => {

    // })
  });
});
