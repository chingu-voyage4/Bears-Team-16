import { User } from "../models";

export const name = `User`;

export const schema = `
type User {
  id: ID!
  email: String!
  password: String
  fname: String!
  lname: String!
  bio: String
  location: String
  avatar: String
  recipes: [Recipe]
  favs: [Recipe]
  unit_system: String!
}`;

export const queries = `
  user(id: ID): User
  users: [User]
`;

export const mutations = `
  updateUser(id: ID): User
`;

export const resolvers = {
  Query: {
    async user(_, { id: userId }) {
      return User
        .where({ id: userId })
        .fetch({ withRelated: [ `recipes`, `favs` ] })
        .then(model => {
          if (!model) return null;
          return model.toJSON();
        });
    },
    async users() {
      return User
        .fetchAll().then(list => list.toJSON());
    },
  },
  Mutation: {
    updateUser: id => ({ prop: `updated user` }),
  },
  User: {
  },
};
