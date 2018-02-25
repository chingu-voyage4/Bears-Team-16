const express = require(`express`);
const morgan = require(`morgan`);
const bodyParser = require(`body-parser`);

const app = express();
const PORT = process.env.PORT || 3005;

// Application config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));

// Route
app.get(`/`, (req, res) => {
  res.json(`Howdy`);
});

app.listen(PORT, console.log(`There will be dragons on port ${PORT}.`));

module.exports = app;
