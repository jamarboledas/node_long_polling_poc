'use strict';

const express = require('express');
const router = express.Router();
const {healthCheck} = require('./health_check');
  
router.use('/status', healthCheck);

module.exports = [router];
