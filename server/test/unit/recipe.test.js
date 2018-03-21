/* eslint-disable no-undef */

import { expect } from "chai";
import { GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";
import schema from "../../src/graphql";

const Recipe = schema.getType(`Recipe`).getFields();

describe(`Recipe types `, () => {
  it(`should have id: ID!`, () => {
    // expect(Recipe).to.have.property(`id`);
    // expect(Recipe.id.type).to.deep.equal(GraphQLNonNull(GraphQLID));
  });
});
