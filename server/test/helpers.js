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

export const request = async (req) => {
  try {
    const { data } = await axios.post(`http://localhost:${keys.PORT}/graphql`, req);
    if (!data.errors) {
      return data.data;
    }
    console.log(data.errors[0]);
  } catch (err) {
    const {
      status,
      data: { errors: [ { message } ] }, // blink blink
    } = err.response;

    console.log(message, status);
    return { message, status };
  }
};
