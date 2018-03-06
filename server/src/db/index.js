import knex from "knex";
import bookshelf from "bookshelf";
import dbConfig from "./dbConfig";

// TODO register modules centrally to avoid circular imports
// bookshelf.plugin(`registry`);

module.exports = bookshelf(knex(dbConfig));
