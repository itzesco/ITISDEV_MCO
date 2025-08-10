const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointments');

// Get all appointments (admin view)
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ appointmentDate: 1, appointmentTime: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get appointments by date
router.get('/appointments/date/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const appointments = await Appointment.find({ appointmentDate: date }).sort({ appointmentTime: 1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update appointment status
router.patch('/appointments/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update appointment time
router.patch('/appointments/:id/time', async (req, res) => {
  try {
    const { id } = req.params;
    const { appointmentTime } = req.body;
    
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { appointmentTime },
      { new: true }
    );
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cancel appointment
router.delete('/appointments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const appointment = await Appointment.findByIdAndDelete(id);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get dashboard statistics
router.get('/dashboard/stats', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    const totalAppointments = await Appointment.countDocuments({});
    const todayAppointments = await Appointment.countDocuments({ appointmentDate: today });
    const pendingAppointments = await Appointment.countDocuments({ status: 'pending' });
    const completedAppointments = await Appointment.countDocuments({ status: 'completed' });
    
    res.json({
      totalAppointments,
      todayAppointments,
      pendingAppointments,
      completedAppointments
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
