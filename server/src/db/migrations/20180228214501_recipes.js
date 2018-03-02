export const up = (knex, Promise) => Promise.all([
    knex.schema.createTable(`recipes`, table => {
        table.increments(`id`).primary();
        table
            .integer(`user_id`)
            .references(`users.id`)
            .notNullable();
        table.string(`title`).notNullable();
        table.text(`desc`).notNullable();
        table.integer(`prep_time`);
        table.string(`category`);
        table.timestamps();
    }),
]);

export const down = (knex, Promise) => Promise.all([ knex.schema.dropTable(`recipes`) ]);
