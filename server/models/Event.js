const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: null },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Admin who created the event
    status: { type: String, enum: ['upcoming', 'cancelled'], default: 'upcoming' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);
