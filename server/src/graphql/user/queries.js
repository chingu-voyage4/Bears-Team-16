const queryTypes = `
  user: User
  users: [User]
`;

const queries = {
  user: () => ({
    id: 2,
    uname: `Bear`,
    email: `bear16@mail.com`,
    password: `12345`,
    location: `chingu`,
  }),
  users: () => [ `I'm a user`, `Me too!!!` ],
};

export { queryTypes, queries };
