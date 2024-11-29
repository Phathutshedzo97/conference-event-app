const express = require('express');
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  cancelEvent,
} = require('../controllers/eventController');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllEvents);
router.get('/:id', getEventById);

// Admin-only routes
router.post('/', authMiddleware, roleMiddleware('admin'), createEvent);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateEvent);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), cancelEvent);

module.exports = router;
