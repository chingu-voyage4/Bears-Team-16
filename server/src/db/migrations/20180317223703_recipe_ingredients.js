export const up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable(`recipe_ingredients`, table => {
      table
        .integer(`recipe_id`)
        .references(`recipes.id`)
        .notNullable();
      table
        .integer(`ingredient_id`)
        .references(`ingredients.id`)
        .notNullable();
      table
        .integer(`unit_id`)
        .references(`units.id`)
        .notNullable();
      table.integer(`amount`).notNullable();
      table.unique([
        `recipe_id`,
        `unit_id`,
        `ingredient_id`,
      ]);
    }),
  ]);

export const down = (knex, Promise) =>
  Promise.all([ knex.schema.dropTable(`recipe_ingredients`) ]);
