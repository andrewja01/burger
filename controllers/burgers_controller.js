const express = require('express');

const router = express.Router();    

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      res.render("index", { burger: data });
    });
  });

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        req.body.burger_name,
    ], function(result) {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }

   });
});   

  module.exports = router;