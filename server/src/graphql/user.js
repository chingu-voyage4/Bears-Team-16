export const name = `User`;

export const schema = `
type User {
  id: ID!
  uname: String
  email: String!
  password: String
  location: String,
  bio: String
  recipes: [Recipe]
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
    user: () => ({
      id: 2, uname: `Bear`, email: `bear16@mail.com`, password: `12345`, location: `chingu`,
    }),
    users: () => [ `I'm a user`, `Me too!!!` ],
  },
  Mutation: {
    updateUser: id => ({ prop: `updated user` }),
  },
  User: {
    email: () => ({ text: `Here's the email` }),
  },
};
