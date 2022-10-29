/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/29
 */

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
