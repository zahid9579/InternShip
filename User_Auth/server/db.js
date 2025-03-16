const mongoose = require('mongoose');

const connectDB = async () => {
//  
  const mongoURI = 'mongodb+srv://kamalzahid636:Pl29CP4iK9Kk4xJJ@cluster0.chcri.mongodb.net/Api_integration?retryWrites=true&w=majority&appName=Cluster0';

  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
 
    process.exit(1);
  }
};

module.exports = connectDB;