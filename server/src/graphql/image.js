import { Image } from "../models";

export const name = `Image`;

export const schema = `
type Image {
  id: ID!
  url: String!
  recipe_id: [Recipe]
}
`;

export const queries = `
  images(id: ID): [Image]
`;

export const mutations = `
  addImage: Image
`;

export const resolvers = {
  Query: {
    images: () => [ `liuh`, `IUho` ],
  },
  Mutation: {
    addImage: () => `Image added!`,
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
