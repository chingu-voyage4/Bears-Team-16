/* eslint-disable global-require */

if (process.env.NODE_ENV === `test`) {
  module.exports = require(`./test`);
} else if (process.env.NODE_ENV === `production`) {
  module.exports = require(`./prod`);
} else {
  // If NODE_ENV is not set
  process.env.NODE_ENV = `development`;
  module.exports = require(`./dev`);
}
