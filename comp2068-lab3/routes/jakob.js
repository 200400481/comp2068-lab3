'use strict';
var express = require('express');
var router = express.Router();

/* GET my listing. */
router.get('/', function (req, res) {
    res.render('jakob', { name: "Jakob" })
});

module.exports = router;
