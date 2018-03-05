import db from "../db";

require(`./recipe`);

export default db.model(`User`, {
  tableName: `users`,
  hasTimestamps: true,
  recipes() {
    return this.hasMany(`Recipe`);
  },
  favourites() {
    return this.belongsToMany(`Recipe`, `favs`);
  },
});

