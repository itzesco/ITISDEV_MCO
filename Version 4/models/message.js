
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    // Using string IDs for now (email/uuid/etc.) since there’s no User model
    senderId:    { type: String, required: true, index: true },
    recipientId: { type: String, required: true, index: true },

    // Optional linkage to your existing entities
    branchId:      { type: mongoose.Schema.Types.ObjectId, ref: 'Branch', default: null, index: true },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', default: null, index: true },

    content:     { type: String, required: true, trim: true, maxlength: 2000 },
    isRead:      { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Helpful indexes
MessageSchema.index({ senderId: 1, recipientId: 1, createdAt: -1 });
MessageSchema.index({ recipientId: 1, isRead: 1 });

module.exports = mongoose.model('Message', MessageSchema);
