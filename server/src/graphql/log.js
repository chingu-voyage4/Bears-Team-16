import { Log } from "../models";

export const name = `Log`;

export const schema = `
type Log {
  id: ID!
  description: String!
}
input LogInput {
  description: String!
}
`;

export const queries = `
`;

export const mutations = `
  createLog(input: LogInput): Log
`;

export const resolvers = {
  Query: {},
  Mutation: {
    createLog: (_, { input }) => Log.forge().save(input)
      .then(model => model.fetch()).then(model => model.toJSON()),
  },
  Log: {},
};
