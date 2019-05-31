const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/fecadidas_othersAlsoBought', {useNewUrlParser: true});

const adidasSchema = mongoose.Schema({
  productID: {type: Number},
  productName: {type: String},
  imageUrl: {type: Array},
  price: {type: Number},
  productType: {type: String},
  description: {type: String},
  descriptionSlogan: {type: String},
  specification: {type: Array},
  subClasses: {type: String}, 
  similarItems: {type: Array}
});

const adidasModel = mongoose.model('adidasModel', adidasSchema);

module.exports = adidasModel;