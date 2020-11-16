let express = require('express');
let router = express.Router();
let UnitsModel = require('../models/unitsModel');

//Returns a list of all Units
router.get('/', function (req, res) {
    res.json(UnitsModel.getAllUnits());
});

module.exports = router;