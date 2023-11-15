// importing SQL library
const sql = require("sqlite3");
let query;

// Connecting to database
const db = new sql.Database("./app.db", sql.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// Creating Table
// query = "create table test(id integer primary key, name, phone_no)";
// db.run(query);

// Insert Data
// query = `insert into test(name,phone_no) values (?,?)`;
// db.run(query, ["john", "1234567890"], (err) => {
//   if (err) return console.error(err.message);
// });

// Showing data
query = `select * from test`;
db.all(query, [], (err, rows) => {
  if (err) return console.error(err.message);
  rows.forEach((row) => console.log(row));
});
