const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// Allow frontend origin (you can refine this later)
app.use(
  cors({
    origin: '*', // for development; for production set to your frontend URL
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🚀 Backend is live');
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
