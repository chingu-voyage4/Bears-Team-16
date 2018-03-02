import schema from "./schema";
import resolvers from "./resolvers";
import { queries, queryText } from "./queries";
import { mutations, mutationText } from "./mutations";

export default {
    schema,
    resolvers,
    queries,
    queryText,
    mutations,
    mutationText,
    name: `Recipe`,
};
