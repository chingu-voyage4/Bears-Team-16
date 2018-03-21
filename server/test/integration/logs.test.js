/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

chai.should();
chai.use(require(`chai-things`));

require(`../../src`);

describe(`Log mutations`, () => {
  const mutate = schema.getType(`Mutation`).getFields();
  beforeEach(reseed);

  describe(`create`, () => {
    const { resolve: res } = mutate.createLog;
    const input = { description: `the newest log` };
    let log;
    before(async () => {
      log = await res(null, { input });
    });
    it(`returns created entry as object`, () => {
      expect(log)
        .to.be.an(`object`)
        .that.has.property(`description`, `the newest log`);
    });
  });
});
