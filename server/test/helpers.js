/* eslint-disable no-undef */
import { knex } from "../src/db";
import axios from "axios";
import keys from "../src/config/keys";

// Start server
require(`../src`);

export const reseed = async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
};

export const request = async req => {
  const res = await axios.post(`http://localhost:${keys.PORT}/graphql`, req);
  return res.data.data;
};
