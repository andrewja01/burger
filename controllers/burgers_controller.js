const express = require('express');

const router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let  hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
    
  });


  module.exports = router;