
const express = require('express');
const Message = require('../models/message');
const router = express.Router();

// very simple sanitizer to strip HTML tags
function stripTags(s) {
  return String(s || '').replace(/<[^>]*>/g, '');
}

// POST /api/messages  (send/create)
router.post('/', async (req, res) => {
  try {
    const { senderId, recipientId, content, branchId, appointmentId } = req.body;

    if (!senderId || !recipientId || !content?.trim()) {
      return res.status(400).json({ ok: false, error: 'senderId, recipientId, and content are required' });
    }

    const doc = await Message.create({
      senderId: String(senderId).trim(),
      recipientId: String(recipientId).trim(),
      branchId: branchId || null,
      appointmentId: appointmentId || null,
      content: stripTags(content).trim(),
    });

    return res.status(201).json({ ok: true, message: doc });
  } catch (err) {
    console.error('Send message error:', err);
    return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
  }
});

// GET /api/messages/thread/:a/:b  (conversation between two parties)
router.get('/thread/:a/:b', async (req, res) => {
  try {
    const { a, b } = req.params;
    if (!a || !b) return res.status(400).json({ ok: false, error: 'Both party IDs are required' });

    const thread = await Message.find({
      $or: [
        { senderId: a, recipientId: b },
        { senderId: b, recipientId: a },
      ],
    })
      .sort({ createdAt: 1 })
      .limit(500);

    return res.json({ ok: true, messages: thread });
  } catch (err) {
    console.error('Fetch thread error:', err);
    return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
  }
});

// GET /api/messages/inbox/:recipientId  (everything sent to one user)
router.get('/inbox/:recipientId', async (req, res) => {
  try {
    const { recipientId } = req.params;
    const rows = await Message.find({ recipientId }).sort({ createdAt: -1 }).limit(500);
    return res.json({ ok: true, messages: rows });
  } catch (err) {
    console.error('Inbox error:', err);
    return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
  }
});

// PATCH /api/messages/:id/read  (mark as read)
router.patch('/:id/read', async (req, res) => {
  try {
    const updated = await Message.findByIdAndUpdate(
      req.params.id,
      { $set: { isRead: true } },
      { new: true }
    );
    if (!updated) return res.status(404).json({ ok: false, error: 'NOT_FOUND' });
    return res.json({ ok: true, message: updated });
  } catch (err) {
    console.error('Mark read error:', err);
    return res.status(500).json({ ok: false, error: 'SERVER_ERROR' });
  }
});

module.exports = router;
