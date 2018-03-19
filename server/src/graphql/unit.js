import { Unit } from "../models";

export const name = `Unit`;

export const schema = `
type Unit {
  id: ID!
  name: String!
  unit_system: String!
}
`;

export const queries = `
  units(id: ID): [Unit]
`;

export const mutations = `
`;

export const resolvers = {
  Query: {},
  Mutation: {},
  Unit: {},
};
