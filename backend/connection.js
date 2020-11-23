const DataStore = require("nedb-promises");

const ds = DataStore.create(process.env.DATABASE_URI);

module.exports = ds;
