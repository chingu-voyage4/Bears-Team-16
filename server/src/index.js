const morgan = require(`morgan`);
const bodyParser = require(`body-parser`);
const app = require(`express`)();

// Application config
require(`dotenv`).config();

const { env } = process;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(require(`cors`)());

// Route
app.get(`/`, (req, res) => {
  res.json(`Howdy`);
});

app.listen(env.PORT, console.log(`There will be dragons on ${env.HOST}:${env.PORT}.`));

module.exports = app;
