/* eslint-disable no-undef */
import chai from "chai";
import { User } from "../../../src/models";
import { reseed } from "../../helpers";

chai.should();
chai.use(require(`chai-things`));

describe(`db models`, () => {
  before(reseed);
  describe(`user`, () => {
    it(`can fetch related records`, async () => {
      const user = await User
        .where({ id: 2 }).fetch({ withRelated: [ `recipes`, `favs` ] })
        .then(data => data.toJSON());

      user.should.be.an(`object`).that.includes({ id: 2 });
      // Check if correct recipes returned
      user.recipes
        .should.be.an(`array`)
        .that.all.have.property(`user_id`, 2);

      // Check is correct favs returned
      user.favs
        .should.be.an(`array`)
        .that.all.have.property(`_pivot_user_id`, 2);
    });
  });
});
