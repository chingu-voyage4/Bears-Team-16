/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, request } from "../../helpers";
import { limits } from "../../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`users`, () => {
  describe(`queries`, () => {
    before(reseed); // Seed once before all queries

    it(`can query all records`, async () => {
      const { users } = await request({
        query: `
        {
          users {
            id
            fname
          }
        }
        `,
      });

      users.should.be
        .an(`array`)
        .that.has.length(limits.users + 1)
        .and.all.include.keys([ `id`, `fname` ])
        .but.all.not.include.keys([ `location` ]);
    });

    it(`can query single user by id`, async () => {
      const { user } = await request({
        query: `
        {
          user(id: 5) {
            id
            fname
            lname
            recipes {
              title
            }
          }
        }
        `,
      });
      expect(user).not.to.be.a(`undefined`);
      user.should.be.an(`object`)
        .that.includes.keys([
          `id`,
          `fname`,
          `lname`,
        ])
        .and.has.property(`id`, `5`);
    });
  });

  // TODO
  // describe("mutations", () => {

  // })
});
