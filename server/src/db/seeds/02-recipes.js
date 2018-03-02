/* eslint-disable no-unused-vars */

export const seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex(`recipes`)
    .del()
    .then(() =>
      // Inserts seed entries
      knex(`recipes`).insert([
        {
          user_id: 2,
          title: `bestest pancakes`,
          desc: `easy-game`,
          prep_time: 25,
          category: `desserts`,
        },
        {
          user_id: 3,
          title: `better pancakes`,
          desc: `easier`,
          prep_time: 24,
          category: `desserts`,
        },
        {
          user_id: 1,
          title: `empanadas`,
          desc: `top-secret`,
          prep_time: 45,
          category: `snacks`,
        },
        {
          id: 4,
          user_id: 1,
          title: `eggs&bacon`,
          desc: `quick`,
          prep_time: 10,
          category: `breakfast`,
        },
      ]));

