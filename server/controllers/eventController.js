const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async (req, res) => {
  const events = await Event.find({ status: 'upcoming' });
  res.json(events);
};

// Get event by ID
exports.getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json(event);
};

// Create a new event
exports.createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json({ message: 'Event created successfully', event });
};

// Update an event
exports.updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json({ message: 'Event updated successfully', event });
};

// Cancel an event
exports.cancelEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, { status: 'cancelled' }, { new: true });
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.json({ message: 'Event cancelled successfully', event });
};
