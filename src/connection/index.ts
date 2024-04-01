import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "titanic",
});

db.connect((err: any) => {
  if (err) return console.log("Error " + err.message);

  console.log("Connected to database");
});

export default db;