// /* eslint-disable no-undef, no-unused-expressions */

// import chai from "chai";
// import { collTemplates, joinTemplates } from "../../src/db/seedConfig";
// import { flattenTemplates, invert2D } from "../../src/utils/helpers";

// chai.should();
// chai.use(require(`chai-things`));

// describe(`Seed Templates`, () => {
//   const collTest = flattenTemplates(collTemplates);
//   const joinTest = flattenTemplates(joinTemplates);

//   describe(`collection templates`, () => {
//     it(`all are arrays of primitive values`, () => {
//       collTest.should.all.be.an(`array`);
//     });
//     it(`all follow [string, integer(opt), boolean(opt)] template`, () => {
//       const [
//         types,
//         params,
//         isUnique,
//       ] = invert2D(collTest);

//       // TODO
//     });
//   });
// });
