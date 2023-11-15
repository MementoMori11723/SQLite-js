// importing SQL library
const conn = require("sqlite3");

// Connecting to database
const db = new conn.Database("./app.db", conn.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

// Creating Table
