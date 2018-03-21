export const up = (knex, Promise) => Promise.all([
  knex.schema.createTable(`users`, table => {
    table.increments(`id`).primary();
    table
      .string(`email`)
      .notNullable()
      .unique();
    table.string(`password`).notNullable();
    table
      .string(`fname`)
      .notNullable()
      .unique();
    table
      .string(`lname`)
      .notNullable()
      .unique();
    table
      .enu(`unit_system`, [ `metric`, `imperial` ])
      .defaultTo(`metric`);
    table.string(`avatar`);
    table.text(`bio`);
    table.string(`location`);
    table.timestamps();
  }),
]);

export const down = (knex, Promise) => Promise.all([ knex.schema.dropTable(`users`) ]);
