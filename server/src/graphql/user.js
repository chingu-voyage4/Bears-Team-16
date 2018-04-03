import { User } from "../models";

export const name = `User`;

export const schema = `
type User {
  id: ID!
  email: String!
  password: String!
  fname: String
  lname: String
  bio: String
  location: String
  avatar: String
  recipes: [Recipe]
  favs: [Recipe]
  unit_system: String
}
input UserInput {
  email: String!
  password: String!
  fname: String
  lname: String
  bio: String
  location: String
  unit_system: String
}
`;

export const queries = `
  user(id: ID): User
  users: [User]
`;

export const mutations = `
  createUser(input: UserInput): User

`;

export const resolvers = {
  Query: {
    users: () => User.fetchAll()
      .then(data => data && data.toJSON()),
    user: async (_, filter) => User
      .where(filter).fetch({ withRelated: [ `recipes`, `favs` ] })
      .then(data => data && data.toJSON()),
  },
  Mutation: {},
  User: {},
};
