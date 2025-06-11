require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const sessionConfig = require('./config/session');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: true, // Reflects the request origin
  credentials: true,
}));

app.use(express.json());
app.use(sessionConfig);

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Auth API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});