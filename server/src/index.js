import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from "cors";
import graphqlHTTP from "express-graphql";
import keys from "./config/keys";
import schema from './graphql/';

require(`./auth/passport`);

export const app = express();

// Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

// Routes
app.get(`/`, (req, res) => { res.json(`Howdy`); });

// const auth = require(`./auth/routes`);
require(`./auth/routes`)(app);
// app.get(`/auth`, auth);

app.use(
  `/graphql`,
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === `development`,
  }),
);

app.listen(keys.PORT, () => console.log(`There will be ${process.env.NODE_ENV} recipes on ${keys.HOST}:${keys.PORT}.`));
