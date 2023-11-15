// importing SQL library
const sql = require("sqlite3");
let query;

// Connecting to database
const db = new sql.Database("./app.db", sql.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// Creating Table
query = "create table test(id integer primary key, name, phone_no)";
db.run(query);
