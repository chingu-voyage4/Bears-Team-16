import { User } from "../models";

export const name = `User`;

export const schema = `
type User {
  id: ID!
  uname: String
  email: String!
  password: String
  location: String
  bio: String
  recipes: [Recipe]
  favs: [Recipe]
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
