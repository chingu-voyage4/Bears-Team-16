// Use ES6 with GraphQL
require(`babel-polyfill`);

export default modules => {
  let queries = ``;
  let mutations = ``;
  const resolvers = {
    RootQuery: {},
    RootMutation: {},
  };

  modules.forEach((module, i) => {
    Object.assign(resolvers, module.resolvers);
    Object.assign(resolvers.RootQuery, module.queries);
    Object.assign(resolvers.RootMutation, module.mutations);
    queries += module.queryText;
    mutations += module.mutationText;
  });

  const schema = `
    type RootQuery {
      ${queries}
    }
    type RootMutation {
      ${mutations}
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `;

  const typeDefs = [ schema ].concat(modules.map(m => m.schema));

  return {
    typeDefs,
    resolvers,
  };
};
