/* eslint-disable no-unused-vars */

export const seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex(`favs`)
    .del()
    .then(() =>
      // Inserts seed entries
      knex(`favs`).insert([
        {
          recipe_id: 3,
          user_id: 1,
        },
        {
          recipe_id: 2,
          user_id: 1,
        },
        {
          recipe_id: 2,
          user_id: 3,
        },
      ]));
