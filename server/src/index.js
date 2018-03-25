import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import graphqlHTTP from "express-graphql";
import keys from "./config/keys";
import schema from './graphql/';

export const app = express();

// Config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

require(`./auth/passport`);
require(`./auth/routes`)(app);

app.use(
  `/graphql`,
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === `development`,
  }),
);

app.listen(keys.PORT, () =>
  console.log(`There will be ${process.env.NODE_ENV} recipes on ${keys.HOST}:${keys.PORT}.`));
