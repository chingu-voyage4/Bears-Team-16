/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, request, rollback } from "../../helpers";
import { limits } from "../../../src/config/seeds";
import { encodeToken } from "../../../src/utils/jwt";

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
          user(id: 2) {
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
        .and.has.property(`id`, `2`);
    });
  });

  describe(`mutations`, () => {
    beforeEach(reseed);
    afterEach(rollback);

    it(`can update a user by id`, async () => {
      const token = encodeToken({ id: 2 });
      const { updateUser } = await request({
      // Check for relations
        query: `
          mutation Mutation($updatedUser: UserUpdate) {
            updateUser(input: $updatedUser) {
              id
              fname
              lname
              email
              password
              unit_system
            }
          }`,
        variables: `{
          "updatedUser": {
            "id": 2,
            "fname":"Joza",
            "unit_system": "imperial"
          }
        }`,
      }, token);

      expect(updateUser).to.be.an(`object`)
        .that.includes({
          id: `2`,
          fname: `Joza`,
          unit_system: `imperial`,
        })
        .and.that.has.keys([ `email`, `password` ]);
    });

    it(`receives 'Unauthorized' message on update with incorrect id`, async () => {
      const token = encodeToken({ id: 12 });
      const data = await request({
      // Check for relations
        query: `
          mutation Mutation($updatedUser: UserUpdate) {
            updateUser(input: $updatedUser) {
              id
            }
          }`,
        variables: `{
          "updatedUser": {
            "id": 2,
            "fname":"Joza"
          }
        }`,
      }, token);
      expect(data.message).to.equal(`Unauthorized`);
    });
  });
});
