export const name = `Recipe`;

export const schema = `
type Recipe {
  id: ID!
  author: String!
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
    recipes: () => [ `I'm a recipe`, `Me too!!!` ],
  },
  Mutation: {
    updateRecipe: id => ({ prop: `updated recipe` }),
  },
  Recipe: {
    author: () => `Author found`,
  },
};

