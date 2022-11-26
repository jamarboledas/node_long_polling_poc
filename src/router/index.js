'use strict';

const express = require('express');
const router = express.Router();
const {healthCheck} = require('../controllers/health_check');
const {date} = require('../controllers/date');

router.use('/status', healthCheck);
router.use('/date', date);

module.exports = [router];
