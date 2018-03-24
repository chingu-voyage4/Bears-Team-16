import { Category } from "../models";

export const name = `Category`;

export const schema = `
type Category {
  id: ID!
  name: String!
  recipes: [Recipe]
}
`;

export const queries = `
  categories(id: ID): [Category]
`;

export const mutations = `
`;

export const resolvers = {
  Query: {},
  Mutation: {},
  Category: {},
};
