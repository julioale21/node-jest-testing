const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://root:emma2017@cluster0.rldih.mongodb.net/node-tdd?retryWrites=true&w=majority');
  } catch (error) { 
    console.error('Error connecting to mongodb');
    console.error(error);
  }
}

module.exports = { connect }