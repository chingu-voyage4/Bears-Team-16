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
  ingredients: [Ingredient]
`;

export const mutations = `
  createIngredient(input: IngredientInput): Ingredient
`;

export const resolvers = {
  Query: {
    ingredients: () =>
      Ingredient.fetchAll()
        .then(data => data && data.toJSON()),
  },
  Mutation: {
    createIngredient: (_, { input }) => Ingredient.forge().save(input)
      .then(model => model.fetch()).then(model => model.toJSON()),
  },
  Ingredient: {},
};
