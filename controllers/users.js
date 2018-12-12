/**
 * Users Controller
 * @module controllers/Users
 * @author Haykuhi Mkrtchyan
 */
const Us = require('../models/Users');

exports.getAll = (req, res) => {
  Us.find({}, (err, data) => {
    if (error) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};

exports.getById = (req, res) => {
  Us.findById({ _id: req.params.id }, (err, data) => {
    if (error) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};

exports.remove = (req, res) => {
  Us.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};

exports.create = (req, res) => {
  Us.insert(req.body, (err, data) => {
    if (error) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};
