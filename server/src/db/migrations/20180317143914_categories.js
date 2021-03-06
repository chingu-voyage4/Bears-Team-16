export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`categories`, table => {
      table.increments(`id`).primary();
      table
        .string(`name`)
        .notNullable()
        .unique();
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`categories`) ]);
