/* eslint-disable no-undef */
import axios from "axios";
import { knex } from "../src/db";
import keys from "../src/config/keys";

// Start server
require(`../src`);

export const reseed = async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
};

export const request = async req => {
  try {
    const res = await axios.post(`http://localhost:${keys.PORT}/graphql`, req);
    return res.data.data;
  } catch (err) {
    return {
      message: err.response.data.errors[0].message,
      status: err.response.status,
    };
  }
};
