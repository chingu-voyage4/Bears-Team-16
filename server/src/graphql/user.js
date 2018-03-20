import { User } from "../models";

export const name = `User`;

export const schema = `
type User {
  id: ID!
  email: String!
  password: String!
  fname: String!
  lname: String!
  bio: String
  location: String
  avatar: String
  recipes: [Recipe]
  favs: [Recipe]
  unit_system: String!
}
input UserInput {
  email: String!
  password: String!
  fname: String!
  lname: String!
  bio: String
  location: String
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
    async user(_, { id: userId }) {
      return User.where({ id: userId })
        .fetch({ withRelated: [ `recipes`, `favs` ] })
        .then(model => {
          if (!model) return null;
          return model.toJSON();
        });
    },
    async users() {
      return User.fetchAll().then(list => list.toJSON());
    },
  },
  Mutation: {
    // TODO test me
    async createUser(_, { input }) {
      return User.forge()
        .save(input)
        .then(model => model.fetch())
        .then(model => model.toJSON());
    },
  },
  User: {},
};
