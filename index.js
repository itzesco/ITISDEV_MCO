require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/database');
const Appointment = require('./models/appointments');
const Branch = require('./models/branches');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/davids_salon')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Basic routes
app.get('/api/branches', async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = new Appointment({
      branchName: req.body.branch,
      appointmentDate: req.body.date,
      appointmentTime: req.body.time,
      customerName: req.body.name,
      customerEmail: req.body.email,
      customerPhone: req.body.phone,
      status: 'pending'
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/branches', (req, res) => {
  res.sendFile(path.join(__dirname, 'branches.html'));
});

app.get('/appointment', (req, res) => {
  res.sendFile(path.join(__dirname, 'appointment.html'));
});

app.get('/service-promos', (req, res) => {
  res.sendFile(path.join(__dirname, 'service-promos.html'));
});

app.get('/contact-socials', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-socials.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});