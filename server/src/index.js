import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Application config
const { env } = process;
dotenv.config();
export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

// Route
app.get(`/`, (req, res) => {
  res.json(`Howdy`);
});

app.listen(env.PORT, console.log(`There will be dragons on ${env.HOST}:${env.PORT}.`));
