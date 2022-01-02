const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
    console.log('Database connect successfully');
  } catch (error) {
    console.log('Database connect not successfuly');
    console.log(error);
  }
}

module.exports = { connect };
