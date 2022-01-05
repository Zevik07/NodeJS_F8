const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const { Schema } = mongoose;

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

course.plugin(mongooseDelete, { deletedAt: true });
// Overide only specific methods
course.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Course', course);
