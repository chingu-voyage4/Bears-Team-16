export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`logs`, table => {
      table.increments(`id`).primary();
      table.text(`description`).notNullable();
      table.timestamps();
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`logs`) ]);
