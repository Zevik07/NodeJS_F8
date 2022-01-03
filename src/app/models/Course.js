const mongoose = require('mongoose');
const { Schema } = mongoose;

slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const course = new Schema(
  {
    name: { type: String },
    description: { type: String, default: '' },
    thumbnail: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true, default: '' },
    videoId: { type: String, default: '' },
    level: { type: String, default: '' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Course', course);
