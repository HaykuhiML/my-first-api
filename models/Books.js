/**
 * Books Model
 * @module models/Books
 * @author Haykuhi Hovhannisyan
 */

const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const booksSchema = new db.Schema({
  title: {
  type: String,
  required: true,
},
janr: {
  type: String,
},
  price: {
    type: Number,
  },
  sklad: {
    type:Boolean,
  },
  image: {
    type: String,
    trim: true,
    default: 'default-book.jpg',
  },
});

module.exports = mongoose.model('books', booksSchema);
