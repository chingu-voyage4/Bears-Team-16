import { Log } from "../models";

export const name = `Log`;

export const schema = `
type Log {
  id: ID!
  description: String!
}
`;

export const queries = `
  logs(id: ID): [Log]
`;

export const mutations = `
`;

export const resolvers = {
  Query: {},
  Mutation: {},
  Log: {},
};
