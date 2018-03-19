import { db } from "../db";

require(`./recipe`);

export default db.model(`Image`, {
  tableName: `images`,
  recipes() {
    return this.belongsTo(`Recipe`);
  },
});
