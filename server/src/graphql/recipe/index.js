import { queries, queryTypes } from "./queries";
import { mutations, mutationTypes } from "./mutations";

const type = `
type Recipe {
  id: ID!
  author: String!
  title: String!
  desc: String
  prepTime: Int,
}
`;


export default {
  type,
  queryTypes,
  queries,
  mutationTypes,
  mutations,
};

