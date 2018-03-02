export const up = (knex, Promise) => Promise.all([
    knex.schema.createTable(`favs`, table => {
        table
            .integer(`recipe_id`)
            .references(`recipes.id`)
            .notNullable();
        table
            .integer(`user_id`)
            .references(`users.id`)
            .notNullable();
    }),
]);

export const down = (knex, Promise) => Promise.all([ knex.schema.dropTable(`favs`) ]);
