import db from '../db';
import User from "../models/user";

const Recipe = db.Model.extend({
  tableName: `recipes`,
  hasTimestamps: true,
  author() {
    return this.belongTo(User);
  },
});

export default Recipe;
