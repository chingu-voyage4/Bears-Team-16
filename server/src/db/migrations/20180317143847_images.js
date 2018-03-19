export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`images`, table => {
      table.increments(`id`).primary();
      table
        .integer(`recipe_id`)
        .references(`recipes.id`)
        .notNullable();
      table
        .text(`url`)
        .notNullable()
        .unique();
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`images`) ]);
