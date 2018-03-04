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

  describe(`queries:user`, () => {
    it(`return an object with property 'id'`, () => {
      expect(Query.recipe.resolve()).to.have.property(`id`);
      expect(Query.recipe.resolve()).to.deep.equal({ id: `I'm a recipe!` });
    });
  });
});
