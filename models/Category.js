/**
 * Category Model
 * @module models/Category
 * @author Haykuhi Hovhannisyan
 */

const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const categorySchema = new db.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    default: 'default-category.jpg',
  },
  position: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('categories', categorySchema);/*harcnel model, categories, categorySchema*/
