import { makeExecutableSchema } from "graphql-tools";
import * as user from "./user";
import * as recipe from "./recipe";
import * as image from "./image";
import * as category from "./category";
import * as unit from "./unit";
import * as ingredient from "./ingredient";
import * as log from "./log";

// Parse and merge schemas and resolvers
const prepareSchema = modules => {
  let schemaQueries = ``;
  let schemaMutations = ``;
  let typeDefs = ``;
  const resolvers = {
    Query: {},
    Mutation: {},
  };

  modules.forEach(module => {
    // Merge resolvers
    resolvers[module.name] = module.resolvers[module.name];
    resolvers.Query = {
      ...resolvers.Query,
      ...module.resolvers.Query,
    };
    resolvers.Mutation = {
      ...resolvers.Mutation,
      ...module.resolvers.Mutation,
    };

    // Add typeDefs
    schemaQueries += module.queries;
    schemaMutations += module.mutations;
    typeDefs += `${module.schema}\n`;
  });

  typeDefs += `
  type Query {
    ${schemaQueries}
  }
  type Mutation {
    ${schemaMutations}
  }
  `;
  return { typeDefs, resolvers };
};

export default makeExecutableSchema(prepareSchema([
  user,
  recipe,
  image,
  category,
  unit,
  ingredient,
  log,
]));
