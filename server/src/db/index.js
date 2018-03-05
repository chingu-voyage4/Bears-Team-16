import knex from "knex";
import dbConfig from "./dbConfig";

const bookshelf = require(`bookshelf`)(knex(dbConfig));

bookshelf.plugin(`registry`);

module.exports = bookshelf;
