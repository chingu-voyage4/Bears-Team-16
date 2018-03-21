import { Ingredient } from "../models";

export const name = `Ingredient`;

export const schema = `
type Ingredient {
  id: ID!
}
`;

export const queries = `
  ingredients(id: ID): [Ingredient]
`;

export const mutations = `
`;

export const resolvers = {
  Query: {},
  Mutation: {},
  Ingredient: {},
};
