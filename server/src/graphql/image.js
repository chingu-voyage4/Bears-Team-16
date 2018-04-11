import { Image } from "../models";

export const name = `Image`;

export const schema = `
type Image {
  id: ID!
  url: String!
  recipe_id: [Recipe]
}
input ImageInput {
  url: String!
  recipe_id: Int!
}
`;

export const queries = `
`;

export const mutations = `
  createImage(input: ImageInput): Image
`;

export const resolvers = {
  Query: { },
  Mutation: {
    createImage: (_, { input }) => Image.forge().save(input)
      .then(model => model.fetch())
      .then(model => model.toJSON()),
  },
  Image: {},
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
