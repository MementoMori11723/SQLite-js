// importing SQL library
const sql = require("sqlite3");
let query;

// Connecting to database
const db = new sql.Database("./app.db", sql.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// Showing data
query = `select * from test`;
db.all(query, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach((row) => console.log(row));
});

// Closing Connection
db.close((err) => {
  if (err) return console.log(err.message);
  else console.log("Database closed successfuly");
});
