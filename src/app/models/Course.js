const mongoose = require('mongoose');
const { Schema } = mongoose;

const course = new Schema({
  name: { type: String },
  description: String,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  thumbnail: String,
  slug: String,
  videoId: String,
});

module.exports = mongoose.model('Course', course);
