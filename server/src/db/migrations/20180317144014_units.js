export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`units`, table => {
      table.increments(`id`).primary();
      table
        .string(`name`)
        .notNullable();
      table
        .enu(`unit_system`, [ `metric`, `imperial` ])
        .notNullable();
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`units`) ]);
