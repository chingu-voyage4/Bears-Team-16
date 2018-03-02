export const up = (knex, Promise) => Promise.all([
    knex.schema.createTable(`users`, table => {
        table.increments(`id`).primary();
        table
            .string(`uname`)
            .notNullable()
            .unique();
        table
            .string(`email`)
            .notNullable()
            .unique();
        table.string(`password`).notNullable();
        table.string(`location`);
        table.string(`bio`);
        table.timestamps();
    }),
]);

export const down = (knex, Promise) => Promise.all([ knex.schema.dropTable(`users`) ]);
