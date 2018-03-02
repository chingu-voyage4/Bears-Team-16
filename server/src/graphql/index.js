import { makeExecutableSchema } from "graphql-tools";
import loadModules from "../utils/loadModules";
import User from "./User";
import Recipe from "./Recipe";

export default makeExecutableSchema(loadModules([ User, Recipe ]));
