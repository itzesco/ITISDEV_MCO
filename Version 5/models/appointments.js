const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  branchName: {
    type: String,
    required: true
  },
  serviceName: {  // Add this field
    type: String,
    required: true
  },
  appointmentDate: {
    type: String,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  customerPhone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending'
  },
  totalPrice: Number,  // Add this field
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema, 'appointments');

module.exports = Appointment;