const express = require('express');
const router = require('./api/routes');
const app = express();

app.use(router);

app.listen(3000);