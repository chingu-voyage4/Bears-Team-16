import { Recipe } from "../models";

export const name = `Recipe`;

export const schema = `
type Recipe {
  id: ID!
  author: User!
  title: String!
  desc: String!
  prepTime: Int!
}
input RecipeInput {
  author: Int!
  title: String!
  desc: String!
  prepTime: Int
}
`;

export const queries = `
  recipe(id: ID): Recipe
  recipes: [Recipe]
`;

export const mutations = `
  updateRecipe(id: ID): Recipe
  createRecipe(input: RecipeInput): Recipe
`;

export const resolvers = {
  Query: {
    recipe: () => ({ id: `I'm a recipe!` }),
    async recipes() {
      return Recipe
        .fetchAll({ withRelated: [ `author` ] })
        .then(list => list.toJSON());
    },
  },
  Mutation: {
    async createRecipe(_, { input }) {
      const vals = {
        title: input.title,
        desc: input.desc,
        user_id: input.author,
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
