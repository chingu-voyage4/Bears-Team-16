import { db } from "../db";

require(`./recipe`);

export default db.model(`Category`, {
  tableName: `categories`,
  recipes() {
    return this.belongsToMany(`Recipe`, `recipe_categories`);
  },
});
