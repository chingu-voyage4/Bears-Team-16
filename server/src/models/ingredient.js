import { db } from "../db";

require(`./recipe`);
require(`./unit`);

export default db.model(`Ingredient`, {
  tableName: `ingredients`,
  recipes() {
    return this.belongsToMany(`Recipe`, `recipe_categories`);
  },
  units() {
    return this.belongsToMany(`Unit`, `recipe_ingredients`);
  },
});
