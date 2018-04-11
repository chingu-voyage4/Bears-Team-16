import { Unit } from "../models";

export const name = `Unit`;

export const schema = `
type Unit {
  id: ID!
  name: String!
  unit_system: String!
}
input UnitInput {
  name: String!
  unit_system: String
}
`;

export const queries = `
`;

export const mutations = `
  createUnit(input: UnitInput): Unit
`;

export const resolvers = {
  Query: {},
  Mutation: {
    createUnit: (_, { input }) => Unit.forge().save(input)
      .then(model => model.fetch()).then(model => model.toJSON()),
  },
  Unit: {},
};
