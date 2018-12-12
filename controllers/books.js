/**
 * Books Controller
 * @module controllers/Books
 * @author Haykuhi Hovhannisyan
 */

const Bk = require('../models/Books');


exports.getAll = (req, res) => {
  Bk.find({}, (err, data) => {
    if (error) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};

exports.getById = (req, res) => {
  Bk.findById({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};

exports.remove = (req, res, next) => {
  Bk.deleteOne({ _id: req.params.id }, (err, data) => {
    if (error) {
      return res.json({ error });
    }
    return res.json({ data });
  });
};


exports.create = (req, res) => {
  Bk.insert(req.body, (err, data) => {
    if (error) {
      return res.json({ err });
    }
    return res.json({ data });
  });
};


exports.update = (req, res, next) => {
  console.log(req.body);
  res.json({
    title: 'test 1',
    janr: 'classic',
    id: 25,
  });
};
