import dbConfig from "../config/db";

const env = process.env.NODE_ENV || `development`;
const knex = require(`knex`)(dbConfig[env]);

const db = require(`bookshelf`)(knex);
db.plugin(`registry`);

// Export knex for testing migrations
export { db, knex };
