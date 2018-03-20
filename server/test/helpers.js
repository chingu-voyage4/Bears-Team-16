/* eslint-disable no-undef */
import { knex } from "../src/db";

export const reseed = async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
};

