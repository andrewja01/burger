require("dotenv").config();
const mysql = require("mysql");
const addKeys = require("../keys.js")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.mysqlPassword,
    database: "burgers_db",
})

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;