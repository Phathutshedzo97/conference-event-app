const morgan = require('morgan');

// Create a logger middleware using Morgan
const logger = morgan('combined');

module.exports = logger;
