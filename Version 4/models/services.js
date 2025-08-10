const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Hair', 'Nail', 'Facial', 'Massage', 'Package']
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  description: String,
  isPromo: {
    type: Boolean,
    default: false
  },
  promoPrice: Number,
  promoEndDate: Date
});

const Service = mongoose.model('Service', serviceSchema, 'services');

module.exports = Service;
