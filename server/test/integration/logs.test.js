/* eslint-disable no-undef */
import chai, { expect } from "chai";
import { reseed, request } from "../helpers";
import { limits } from "../../src/config/seeds";

chai.should();
chai.use(require(`chai-things`));

describe(`logs`, () => {
  describe(`mutations`, () => {
    beforeEach(reseed);

    it(`can create a record`, async () => {
      const { createLog } = await request({
        // TODO check for relateions
        query: `
          mutation Mutation($newLog: LogInput) {
            createLog(input: $newLog) {
              id
              description
            }
          }`,
        variables: `{
          "newLog": {
            "description":"my new Log"
          }
        }`,
      });
      createLog.should.deep.include({
        id: (limits.logs + 1).toString(),
        description: `my new Log`,
      });
    });
  });
});

