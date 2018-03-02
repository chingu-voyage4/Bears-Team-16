import db from "../db";
import Recipe from "../models/recipe";

const User = db.Model.extend({
  tableName: `users`,
  hasTimestamps: true,
  recipes() {
    return this.hasMany(Recipe);
  },
  favs() {
    return this.belongsToMany(Recipe, `favs`);
  },
});

export default User;
