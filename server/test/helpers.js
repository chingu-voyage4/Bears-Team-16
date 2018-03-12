/* eslint-disable no-undef */
import { knex } from "../src/db";

export const reseed = () => {
  beforeEach(done => {
    knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        knex.seed.run().then(() => {
          done();
        });
      });
    });
  });

  // afterEach(done => {
  //   knex.migrate.rollback().then(() => {
  //     done();
  //   });
  // });
};

