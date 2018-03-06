import { Recipe } from "../models";

export const name = `Recipe`;

export const schema = `
type Recipe {
  id: ID!
  author: User!
  title: String
  desc: String
  prepTime: Int,
}
`;

export const queries = `
  recipe(id: ID): Recipe
  recipes: [Recipe]
`;

export const mutations = `
  updateRecipe(id: ID): Recipe
`;

export const resolvers = {
  Query: {
    recipe: () => ({ id: `I'm a recipe!` }),
    async recipes() {
      return Recipe
        .forge()
        .fetchAll({ withRelated: [ `author` ] })
        .then(list => list.toJSON());
    },
  },
  Mutation: {
    updateRecipe: id => ({ prop: `updated recipe` }),
  },
  Recipe: {},
};
