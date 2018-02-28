import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Application config
dotenv.config({ path: `${__dirname  }/../../.env` });
const { env } = process;
export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

// Route
app.get(`/`, (req, res) => {
    res.json(`Howdy`);
});

app.listen(env.PORT, console.log(`There will be recipes on ${env.HOST}:${env.PORT}.`));
