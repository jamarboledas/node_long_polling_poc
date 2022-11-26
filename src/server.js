'use strict';

const express = require('express');
const router = require('./router');
const {polling} = require('./application/polling');

const app = express();
const PORT = 3000;

polling();

app.use(router);

app.listen(PORT, () => {
    console.log(`The server is running on PORT ${PORT}`);
});