'use strict';
var express = require('express');
var router = express.Router();

/* GET father listing. */
router.get('/', function (req, res) {
    res.render('father', { name: "Dad" })
});

module.exports = router;
