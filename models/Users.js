/**
 * Users Model
 * @module models/Users
 * @author Haykuhi Hovhannisyan
 */

const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const usersSchema = new db.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: 'default-user.jpg',
  },

});

module.exports = mongoose.model('users', UsersSchema);
