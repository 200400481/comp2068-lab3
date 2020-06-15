'use strict';
var express = require('express');
var router = express.Router();

/* GET mother listing. */
router.get('/', function (req, res) {
    res.render('mother', { name: "Mom" })
});

module.exports = router;
