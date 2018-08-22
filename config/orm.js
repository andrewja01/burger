let connection = require('./connection.js');

const orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(queryString);
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        let queryString = `"INSERT INTO ?? ("+ cols.toString() + ")" 
        + "VALUES (" + ?? + ")"`
        console.log(queryString);

        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function (table, val, condition, cb) {
        let queryString = `"UPDATE " + table + " SET ?? WHERE ??"; `

        console.log(queryString);

        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};


module.exports = orm;
