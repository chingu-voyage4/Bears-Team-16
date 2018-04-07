import keys from "./keys";

// Avoid ES6 export due to how knex handles arguments
module.exports = {
  test: {
    client: `pg`,
    connection: keys.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/../db/migrations`,
      tableName: `knex_migrations`,
    },
    seeds: { directory: `${__dirname}/../db/seeds` },
  },
  development: {
    client: `pg`,
    connection: keys.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/../db/migrations`,
      tableName: `knex_migrations`,
    },
    seeds: { directory: `${__dirname}/../db/seeds` },
    debug: true,
  },
  production: {
    client: `pg`,
    connection: keys.DATABASE_URL,
    ssl: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: `${__dirname}/../db/migrations`,
      tableName: `knex_migrations`,
    },
  },
};
