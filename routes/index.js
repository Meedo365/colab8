const express = require('express');
const app = express.Router();

require('./endpoints/user')(app);
require('./endpoints/event')(app);
require('./endpoints/comment')(app);
require('./endpoints/attendees')(app);
require('./endpoints/tag')(app);

module.exports = app;
