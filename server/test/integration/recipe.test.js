/* eslint-disable no-undef */
import chai from "chai";
import { reseed } from "../helpers";
import schema from "../../src/graphql";

require(`../../src`);

chai.use(require(`chai-http`));
const { expect } = chai;
const Query = schema.getType(`Query`).getFields();

// describe(`Recipe`, () => {
//   describe(`query:recipe`, () => {
//     it(`return an object with property 'id'`, () => {
//       expect(Query.recipe.resolve()).to.have.property(`id`);
//       expect(Query.recipe.resolve()).to.deep.equal({ id: `I'm a recipe!` });
//     });
//   });

//   describe(`query:recipes`, () => {
//     // reseed before each test
//     reseed();

//     it(`returns an array`, () =>
//       Query.recipes.resolve().then(data => {
//         expect(data).to.be.an(`array`);
//       }));
//   });
// });
