const path = require('path');

const express = require('express');
const adminController = require('../controller/adminController');


const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.addProductForm);

// /admin/add-product => POST
router.post('/add-product', adminController.addProductPost);

module.exports = router;
