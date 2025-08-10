require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const connectDB = require('./config/config');
const Appointment = require('./models/appointments');
const Branch = require('./models/branches');
const Service = require('./models/services');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://...')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// API routes
app.get('/api/branches', async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json(branches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/appointments', async (req, res) => {
  try {
    const appointment = new Appointment({
      branchName: req.body.branch,
      serviceName: req.body.service,
      appointmentDate: req.body.date,
      appointmentTime: req.body.time,
      customerName: req.body.name,
      customerEmail: req.body.email,
      customerPhone: req.body.phone,
      totalPrice: req.body.totalPrice,
      status: 'pending'
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/create-test-services', async (req, res) => {
  try {
    const testServices = [
      { name: 'Haircut & Styling', category: 'Hair', price: 800, duration: 60, description: 'Professional haircut and styling' },
      { name: 'Hair Coloring', category: 'Hair', price: 1500, duration: 120, description: 'Full hair coloring service' },
      { name: 'Manicure', category: 'Nail', price: 400, duration: 45, description: 'Classic manicure' },
      { name: 'Facial Treatment', category: 'Facial', price: 1200, duration: 90, description: 'Rejuvenating facial' },
      { name: 'Hair & Nail Package', category: 'Package', price: 1000, duration: 105, description: 'Haircut + Manicure combo', isPromo: true, promoPrice: 800 }
    ];
    
    for (const service of testServices) {
      await Service.findOneAndUpdate(
        { name: service.name },
        service,
        { upsert: true, new: true }
      );
    }
    
    res.json({ message: 'Test services created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Default route → loads homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
