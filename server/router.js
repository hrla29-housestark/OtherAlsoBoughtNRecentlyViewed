const Router = require('express').Router();
const controller = require('./controller.js');

Router
.route('/othersAlsoBought')
.get(controller.getOthersAlsoBought)

module.exports = Router;
