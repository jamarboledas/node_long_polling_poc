'use strict';

const express = require('express');
const router = express.Router();
const {healthCheck} = require('../controllers/health_check');
  
router.use('/status', healthCheck);

module.exports = [router];
