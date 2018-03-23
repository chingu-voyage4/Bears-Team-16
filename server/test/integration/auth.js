/* eslint-disable no-undef */
import { expect } from "chai";
import { login, reseed } from "../helpers";
import { limits } from "../../src/config/seeds";

describe(`auth`, () => {
  before(reseed);
  it(`returns a user and a token on succsessful login`, async () => {
    const data = await login({
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
    const { status, message } = await login({
      email: `wrong@mail.com`,
      password: `wrongpassword`,
    });

    expect(message)
      .to.equal(`Something is not right`);
    expect(status).to.equal(400);
  });
});

