import { db } from '../db';

require(`./user`);
require(`./ingredient`);
require(`./unit`);
require(`./category`);
require(`./image`);

export default db.model(`Recipe`, {
  tableName: `recipes`,
  hasTimestamps: true,
  author() {
    return this.belongsTo(`User`);
  },
  images() {
    return this.hasMany(`Image`);
  },
  favs() {
    return this.belongsToMany(`User`, `favs`);
  },
  ingredients() {
    return this.belongsToMany(`Ingredient`, `recipe_ingredients`);
  },
  units() {
    return this.belongsToMany(`Unit`, `recipe_units`);
  },
  categories() {
    return this.belongsToMany(`Category`, `recipe_categories`);
  },
});
