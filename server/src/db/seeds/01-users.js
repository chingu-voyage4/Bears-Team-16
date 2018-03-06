/* eslint-disable no-unused-vars */

export const seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex(`users`)
    .del()
    .then(() =>
      // Inserts seed entries
      knex(`users`).insert([
        {
          uname: `aaayumi`,
          email: `aym@mail.com`,
          password: `12345`,
          location: `ger`,
          bio: `hello`,
        },
        {
          uname: `thom`,
          email: `thom@mail.com`,
          password: `12345`,
          location: `fra`,
          bio: `hello`,
        },
        {
          uname: `osy`,
          email: `osy@mail.com`,
          password: `12345`,
          location: `swe`,
          bio: `hello`,
        },
      ]));

