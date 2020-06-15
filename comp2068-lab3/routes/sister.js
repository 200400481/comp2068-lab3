'use strict';
var express = require('express');
var router = express.Router();

/* GET sister listing. */
router.get('/', function (req, res) {
    res.render('sister', { name: "Sister" })
});

module.exports = router;
