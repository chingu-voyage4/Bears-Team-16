import { queries, queryTypes } from "./queries";
import { mutations, mutationTypes } from "./mutations";

const type = `
type User {
  id: ID!
  uname: String
  email: String!
  password: String
  location: String,
  bio: String
  recipes: [Recipe]
}
`;

export default {
  type,
  queryTypes,
  queries,
  mutationTypes,
  mutations,
};
