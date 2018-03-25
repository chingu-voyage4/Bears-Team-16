/* eslint-disable no-undef */
import { expect } from "chai";
import { signin, authRequest, reseed, rollback } from "../helpers";
import { limits } from "../../src/config/seeds";
import { verifyEmail } from "../../src/utils/auth";

describe.only(`auth`, () => {
  before(reseed);
  after(rollback);

  it(`verifies an email`, async () => {
    expect(await verifyEmail(`mail@mail.com`)).to.be.true;
    expect(await verifyEmail(`bad@mail.com`)).to.be.false;
  });

  describe(`login`, () => {
    it(`returns a user and an encoded token on succsessful login`, async () => {
      const data = await signin(`/login`, {
        email: `mail@mail.com`,
        password: `12354`,
      });

      expect(data)
        .to.be.an(`object`)
        .that.has.keys([ `user`, `token` ]);
      expect(data.user).to.include({
        id: limits.users + 1,
        unit_system: `metric`,
      }).and.that.has.property(`bio`, null);
    });

    it(`returns an error message on bad credentials`, async () => {
      const { status, message } = await signin(`/login`, {
        email: `wrong@mail.com`,
        password: `wrongpassword`,
      });

      expect(message)
        .to.equal(`Something is not right`);
      expect(status).to.equal(400);
    });
  });

  describe(`register`, () => {
    it(`returns a new user and an encoded token on succseessful registration`, async () => {
      const data = await signin(`/register`, {
        email: `newuser@here.com`,
        password: `newuserpassword`,
      });

      expect(data)
        .to.be.an(`object`)
        .that.has.keys([ `user`, `token` ]);
      expect(data.user)
        .to.include({
          id: limits.users + 2,
          unit_system: `metric`,
          fname: null,
          bio: null,
        });
    });
  });

  // describe(`authorized requests`, () => {
  //   it(`checks client requests for correct tokens`, async () => {
  //     const query = {
  //       query: `
  //       {
  //         user(id: 5) {
  //           fname
  //         }
  //       }
  //       `,
  //     };
  //     const data = await authRequest(query);
  //     console.log(data);
  //     // TODO
  //   });
  // });
});
