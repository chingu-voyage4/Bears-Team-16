import dbConfig from "./dbConfig";

const knex = require(`knex`)(dbConfig);

const db = require(`bookshelf`)(knex);
db.plugin(`registry`);

// Export knex for testing migrations
export { db, knex };
