import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";
import { expect } from "chai";
import schema from "../../src/graphql";

const Recipe = schema.getType(`Recipe`).getFields();
const Query = schema.getType(`Query`).getFields();

describe(`Recipe`, () => {
  describe(`types`, () => {
    it(`should have id: ID!`, () => {
      expect(Recipe).to.have.property(`id`);
      expect(Recipe.id.type).to.deep.equal(GraphQLNonNull(GraphQLID));
    });
  });

  // decribe(`queries:user`, () => {
  //   it(`should say 'I'm a recipe!'`, () => {
  //     expect(Recipe).
  //   });
  // });
});
