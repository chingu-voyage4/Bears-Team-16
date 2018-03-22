import { Recipe } from "../models";

export const name = `Recipe`;

export const schema = `
type Recipe {
  id: ID!
  author: User!
  title: String!
  description: String!
  instructions: String!
  prep_time: Int!
  images: [Image]
  categories: [Category]
}
input RecipeInput {
  author: Int!
  title: String!
  description: String!
  instructions: String!
  prep_time: Int!
}
`;

export const queries = `
  recipe(id: ID): Recipe
  recipes: [Recipe]
`;

export const mutations = `
  createRecipe(input: RecipeInput): Recipe
`;

export const resolvers = {
  Query: {
    recipes: () => Recipe.fetchAll({
      withRelated: [ `images`, `categories` ],
    }).then(data => data && data.toJSON()),
    recipe: (_, filter) => Recipe.where(filter)
      .fetch({ withRelated: [ `images`, `categories` ] })
      .then(data => data && data.toJSON()),
  },
  Mutation: {
    createRecipe: (_, { input }) => {
      // FIXME must be a better way
      const vals = { ...input, user_id: input.author };
      delete vals.author;
      return Recipe.forge()
        .save(vals)
        .then(model => model.fetch())
        .then(model => model.toJSON());
    },
  },
  Recipe: {},
};
