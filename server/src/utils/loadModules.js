// Use ES6 with GraphQL
require(`babel-polyfill`);

export default modules => {
  let rootQueryTypes = ``;
  let rootMutationTypes = ``;
  const typeDefs = [];
  let resolvers = {
    Query: {},
    Mutation: {},
  };

  // Iterate over passed graphql modules and merge with initialized typeDefs and resolvers
  modules.forEach((module, i) => {
    rootQueryTypes += module.queryTypes;
    rootMutationTypes += module.mutationTypes;
    typeDefs[i + 2] = module.type; // Reserve 2 spaces for rootQuerTypes and rootMutationTypes
    resolvers = {
      Query: { ...resolvers.Query, ...module.queries },
      Mutation: { ...resolvers.Mutation, ...module.mutations },
    };
  });

  typeDefs[0] = `
  type Query {
    ${rootQueryTypes}
  }`;
  typeDefs[1] = `
  type Mutation {
    ${rootMutationTypes}
  }`;

  return {
    typeDefs,
    resolvers,
  };
};
