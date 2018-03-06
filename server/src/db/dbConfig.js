require(`dotenv`).config({ path: `${__dirname}/../../../.env` });
const { env } = process;

// Avoid ES6 export due to how knex handles arguments
module.exports = {
  client: `pg`,
  connection: {
    host: env.DB_HOST,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PWD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: { tableName: `knex_migrations` },
  seeds: { directory: `./seeds` },
  debug: env.APP_ENV === `development`,
};
