export default {
  name: `User`,
  schema: `
  type User {
    id: ID!
    uname: String
    email: String!
    password: String
    location: String,
    bio: String
    recipes: [Recipe]
  }`,
  query: `
    user(id: ID): User
    users: [User]
  `,
  mutation: `
    updateUser(id: ID): User
  `,
  resolvers: {
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
  },
};
