const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("burgers", val, function(res) {
            cb(res);
        });
    },

    updateOne: function(condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;