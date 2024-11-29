const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(logger); // Log HTTP requests
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/events', eventRoutes); // Event management routes
app.use('/api/users', userRoutes); // User-specific routes

// Error handling middleware
app.use(errorHandler);

module.exports = app;
