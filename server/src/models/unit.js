import { db } from "../db";

require(`./recipe`);
require(`./ingredient`);

export default db.model(`Unit`, {
  tableName: `units`,
  recipes() {
    return this.belongsToMany(`Recipe`, `recipe_recipes`);
  },
  ingredients() {
    return this.belongsToMany(`Ingredient`, `recipe_ingredient`);
  },
});
