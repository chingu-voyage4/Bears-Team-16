import { User } from "../models";
import { verifyToken } from "../utils/jwt";

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
input UserUpdate {
  id: ID!
  email: String
  password: String
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
  updateUser(input: UserUpdate): User

`;

export const resolvers = {
  Query: {
    users: () => User.fetchAll()
      .then(data => data && data.toJSON()),
    user: async (_, filter) => User
      .where(filter).fetch({ withRelated: [ `recipes`, `favs` ] })
      .then(data => data && data.toJSON()),
  },
  Mutation: {
    updateUser: (_, { input }, context) => {
      const tokenPayload = verifyToken(context.headers.authorization);

      // Proceed if payload id is equal to id of a user to update
      if (tokenPayload.id === +input.id) {
        // Omit id attribute when updating
        const { id, ...valsToUpdate } = input;

        return User.where({ id }).save(valsToUpdate, { patch: true })
          .then(model => model.fetch())
          .then(model => model.toJSON());
      }
      throw new Error(`Unauthorized`);
    },
  },
  User: {},
};
