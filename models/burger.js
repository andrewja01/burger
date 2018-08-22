const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cd(res);
        });
    },

    // updateOne: function(objColVals, condition, cb) {
    //     orm.updateOne("burgers", objColVals, condition, function(res) {
    //         cd(res);
    //     });
    // }
};

module.exports = burger;