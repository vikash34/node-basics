const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminController=require('../controller/adminController');

const router = express.Router();

router.get('/', adminController.getProducts);

module.exports = router;
