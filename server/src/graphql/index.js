import { makeExecutableSchema } from "graphql-tools";
import loadModules from "../utils/loadModules";
import user from "./user";
import recipe from "./recipe";


export default makeExecutableSchema(loadModules([ user, recipe ]));
