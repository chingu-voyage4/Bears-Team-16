import { Ingredient } from "../models";

export const name = `Ingredient`;

export const schema = `
type Ingredient {
  id: ID!
  name: String!
}
input IngredientInput {
  name: String!
}
`;

export const queries = `
`;

export const mutations = `
  createIngredient(input: IngredientInput): Ingredient
`;

export const resolvers = {
  Query: {},
  Mutation: {
    createIngredient: (_, { input }) => Ingredient.forge().save(input)
      .then(model => model.fetch()).then(model => model.toJSON()),
  },
  Ingredient: {},
};
