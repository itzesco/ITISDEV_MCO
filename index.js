require('dotenv').config();
const express = require('express');
const path = require('path');
const config = require('./config/config');
const Appointment = require('./models/appointments');
const Branch = require('./models/branches');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB
config.connect();

// Routes for Branches and Appointments DB
app.get('/api/branches', async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json(branches);
  } catch (error) {
    console.error('Error fetching branches:', error);
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/appointments', async (req, res) => {
  try {
    console.log('Creating new appointment:', req.body);
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
    console.log('Appointment saved successfully');
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(400).json({ message: error.message });
  }
});

// Route handlers for different pages
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

// Debug route to check database collections
app.get('/api/debug/collections', async (req, res) => {
  try {
    const mongoose = require('mongoose');
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({
      database: mongoose.connection.db.databaseName,
      collections: collections.map(c => c.name)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});