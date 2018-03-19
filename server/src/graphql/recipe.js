import { Recipe } from "../models";

export const name = `Recipe`;

export const schema = `
type Recipe {
  id: ID!
  author: User!
  title: String!
  description: String!
  portions: Int!
  prepTime: Int!
  images: [Image]
  categories: [Category]
}
input RecipeInput {
  author: Int!
  title: String!
  desc: String!
  prepTime: Int
}
`;

export const queries = `
  recipes(id: ID): [Recipe]
`;

export const mutations = `
  updateRecipe(id: ID): Recipe
  createRecipe(input: RecipeInput): Recipe
`;

export const resolvers = {
  Query: {
    async recipes(_, { id: recipeId }) {
      if (recipeId) {
        return Recipe
          .where({ id: recipeId })
          .fetch({ withRelated: [ `author`, `images` ] })
          .then(data => data.toJSON());
      }
      return Recipe
        .fetchAll({ withRelated: [ `author`, `images` ] })
        .then(data => data.toJSON());
    },
  },
  Mutation: {
    async createRecipe(_, { input }) {
      const vals = {
        title: input.title,
        desc: input.desc,
        author: input.author,
        prep_time: input.prepTime,
      };

      return Recipe
        .forge()
        .save(vals)
        .then(model => model.fetch({ withRelated: [ `author` ] }))
        .then(model => model.toJSON());
    },
    updateRecipe: id => ({ prop: `updated recipe` }),
  },
  Recipe: {},
};


/* GraphiQL example mutation syntax
mutation example($newRecipe: RecipeInput) {
  createRecipe(input: $newRecipe) {
    author {
      id
      uname
    }
    desc
    title
  }
}

variables:
{
  "newRecipe": {
    "author": 3,
    "desc": "new desc",
    "title": "newTitle",
    "prep_time": 25
  }
}
 */
