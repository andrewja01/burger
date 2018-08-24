let connection = require('./connection.js');

const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";   
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(queryString);
            cb(result);
        });
    },
    insertOne: function (tableInput, val, cb) {
        let queryString = "INSERT INTO " + tableInput;

        queryString += "(burger_name)";
        queryString += " VALUES ('" 
        queryString += val + "');";

        connection.query(queryString, val, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(queryString);
            cb(result);
        });
    },
    updateOne: function (tableInput, condition, cb) {
        let queryString = "UPDATE " + tableInput;

        queryString += " SET devoured=true WHERE ";
        queryString += condition + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(queryString);
            cb(result);
        });
    }
};


module.exports = orm;
