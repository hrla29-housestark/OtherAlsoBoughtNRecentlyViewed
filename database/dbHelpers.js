const adidasModel = require('./index.js');

const othersAlsoBoughtHelper = () => {
  return adidasModel.find();
}

module.exports = {
  othersAlsoBoughtHelper
}