/* eslint-disable no-undef, no-unused-expressions */

import chai from "chai";
import { genTbl, genJoin } from "../../../src/utils/seedGenerator";

chai.should();
chai.use(require(`chai-things`));

describe(`Seed Generator`, () => {
  describe(`genTbl`, () => {
    // Duplicate check helper
    const hasDuplicates = (arr, prop) => {
      const valArr = arr.map(item => item[prop]);
      return valArr.some((item, i) => valArr.indexOf(item) !== i);
    };

    it(`returns an array of objects of correct size`, () => {
      const collTest = genTbl({
        email: [ `email` ],
        password: [ `string` ],
      })(5);
      collTest.should.be.an(`array`);
      collTest.should.all.have.property(`email`);
      collTest.should.all.have.property(`password`);
    });
    it(`allows duplicate values by default`, () => {
      const collTest = genTbl({
        syllable: [ `syllable` ],
      })(1000);
      hasDuplicates(collTest, `sylable`).should.be.true;
    });
    it(`returns unique values when passed 'isUnique' param`, () => {
      const collTest = genTbl({
        email: [
          `email`,
          null,
          true,
        ],
      })(100);
      hasDuplicates(collTest, `email`).should.be.false;
    });
  });

  describe(`genJoin`, () => {
    const joinTest = genJoin({
      user_id: [ `int`, 5 ],
      recipe_id: [ `int`, 15 ],
    })(15);
    it(`returns an array of unique objects`, () => {
      joinTest.should.be.an(`array`);
      const hasDuplicates = joinTest.some(item => {
        const base = JSON.stringify(item);
        return joinTest.some((seed, i) =>
          base === JSON.stringify(seed) &&
          joinTest.indexOf(item) !== i);
      });
      hasDuplicates.should.be.false;
    });
    it(`generates correct maximum values`, () => {
      joinTest.map(item => item.user_id).should.all.be.below(6);
      joinTest.map(item => item.recipe_id).should.all.be.below(16);
    });
  });
});

