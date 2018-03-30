import { Category } from "../models";

export const name = `Category`;

export const schema = `
type Category {
  id: ID!
  name: String!
  recipes: [Recipe]
}
input CategoryInput {
  name: String!
}
`;

export const queries = `
  categories: [Category]
`;

export const mutations = `
  createCategory(input: CategoryInput): Category
`;

export const resolvers = {
  Query: {
    categories: () => Category.fetchAll()
      .then(data => data && data.toJSON()),
  },
  Mutation: {
    createCategory: (_, { input }) => Category.forge().save(input)
      .then(model => model.fetch()).then(model => model.toJSON()),
  },
  Category: {},
};
