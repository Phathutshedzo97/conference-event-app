const app = require('./app'); // Import the app configuration
const { PORT } = require('./config/dotenv.config'); // Centralized config
const connectDB = require('./config/db'); // Database connection

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
