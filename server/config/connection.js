const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts')
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error:', err));

module.exports = db;
