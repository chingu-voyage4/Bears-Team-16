/* eslint-disable no-undef */
import { expect } from "chai";
import { signin, reseed, rollback } from "../helpers";
import { limits } from "../../src/config/seeds";
import { decodeToken } from "../../src/utils/jwt";

describe(`auth`, () => {
  before(reseed);
  after(rollback);

  describe(`login`, () => {
    it(`returns an encoded token on succsessful login`, async () => {
      const data = await signin(`/login`, {
        email: `mail@mail.com`,
        password: `12354`,
      });

      expect(data)
        .to.be.an(`object`)
        .that.has.key(`token`);
      expect(decodeToken(data.token))
        .to.include({ id: limits.users + 1, unit_system: `metric` })
        .and.that.has.property(`bio`, null);
    });

    it(`returns an error message on bad credentials`, async () => {
      const { message } = await signin(`/login`, {
        email: `wrong@mail.com`,
        password: `wrongpassword`,
      });
      expect(message).to.equal(`Email or password incorrect.`);
    });
  });

  describe(`register`, () => {
    it(`returns an encoded token on succseessful registration`, async () => {
      const data = await signin(`/register`, {
        email: `newuser@here.com`,
        password: `newuserpassword`,
      });

      expect(data)
        .to.be.an(`object`)
        .that.has.keys(`token`);
      expect(decodeToken(data.token))
        .to.include({
          id: limits.users + 2,
          unit_system: `metric`,
          fname: null,
          bio: null,
        });
    });
  });
});
