const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/yourDatabaseName'; // Replace with your actual MongoDB URI

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start your server or perform other operations here
  })
  .catch(err => console.error('MongoDB connection error:', err));