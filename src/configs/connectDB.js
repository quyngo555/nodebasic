// get the client
// const mysql = require('mysql2');
import mysql from 'mysql2/promise'

// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejbasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//       console.log('check mysql');
//     console.log(results); // results contains rows returned by server
//   }
// );

export default pool;