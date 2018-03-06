import db from '../db';
import { User } from "../models";

export default db.Model.extend({
  tableName: `recipes`,
  hasTimestamps: true,
  author() {
    return this.belongTo(User);
  },
});
