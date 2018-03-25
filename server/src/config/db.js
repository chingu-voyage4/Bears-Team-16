import keys from "./keys";

// Avoid ES6 export due to how knex handles arguments
module.exports = {
  client: `pg`,
  connection: {
    host: keys.DB_HOST,
    database: keys.DB_NAME,
    user: keys.DB_USER,
    password: keys.DB_PWD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: `${__dirname}/../db/migrations`,
    tableName: `knex_migrations`,
  },
  seeds: { directory: `${__dirname}/../db/seeds` },
  debug: process.env.NODE_ENV === `development`,
};