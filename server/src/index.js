import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import graphqlHTTP from "express-graphql";
import schema from './graphql/';

// Application config
dotenv.config({ path: `${__dirname}/../../.env` });
const { env } = process;
export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

// Route
app.get(`/`, (req, res) => { res.json(`Howdy`); });

// GraphiQL
app.use(
  `/graphql`,
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);


app.listen(env.PORT, console.log(`There will be recipes on ${env.HOST}:${env.PORT}.`));
