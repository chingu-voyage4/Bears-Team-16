/* eslint-disable no-undef */
import axios from "axios";
import { knex } from "../src/db";
import keys from "../src/config/keys";

// Start server
require(`../src`);

const apiOptions = {
  method: `POST`,
  url: `http://localhost:${keys.PORT}`,
  timeout: 2000,
};

export const request = async (req, token) => {
  try {
    // const { data } = await api.post(`/graphql`, req);
    const { data } = await axios({
      ...apiOptions,
      url: `${apiOptions.url}/graphql`,
      data: req,
      headers: {
        Authorization: token,
      },
    });
    if (data.errors) {
      return { message: data.errors[0].message };
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

export const signin = async (route, credentials) => {
  try {
    const { data } = await axios({
      ...apiOptions,
      url: `${apiOptions.url + route}`,
      data: credentials,
    });
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
