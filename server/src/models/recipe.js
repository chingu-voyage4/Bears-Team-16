import db from '../db';

require(`./user`);

export default db.model(`Recipe`, {
  tableName: `recipes`,
  hasTimestamps: true,
  author() {
    return this.belongsTo(`User`);
  },
});

