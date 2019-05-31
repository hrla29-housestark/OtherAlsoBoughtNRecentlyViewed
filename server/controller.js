const Helpers = require('../database/dbHelpers.js');

const getOthersAlsoBought = (req, res) => {
  console.log('hi')
  Helpers.othersAlsoBoughtHelper()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err));
};


module.exports = {
  getOthersAlsoBought
}