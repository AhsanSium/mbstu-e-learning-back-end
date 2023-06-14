require('dotenv').config({ path: './.env' });

module.exports = {
  mongoURI: process.env.MONGO_DB_AUTH,
  secretOrKey: "secret"
};
