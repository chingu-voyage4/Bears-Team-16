/* eslint-disable no-undef */
import axios from "axios";
import { knex } from "../src/db";
import keys from "../src/config/keys";

// Start server
require(`../src`);

const api = axios.create({
  baseURL: `http://localhost:${keys.PORT}`,
  timeout: 2000,
});

export const request = async (req) => {
  try {
    const { data } = await api.post(`/graphql`, req);
    if (data.errors) {
      console.log(data.errors[0]);
    }
    return data.data;
  } catch (err) {
    const {
      status,
      data: { errors: [ { message } ] }, // blink blink
    } = err.response;
    return { message, status };
  }
};

export const login = async credentials => {
  try {
    const { data } = await api.post(`/login`, credentials);
    return data;
  } catch (err) {
    const {
      response: { data: { message } },
      response: { status },
    } = err;
    return { message, status };
  }
};

export const reseed = async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
};

export const rollback = async () => {
  await knex.migrate.rollback();
};
