require('dotenv').config();
var db = require('./models');

db.sequelize.sync();