/**
 * Category Controller
 * @module controllers/Category
 * @author Haykuhi Hovhannisyan
 */
const Cat = require('../models/Category');

exports.getAll = (req, res, next) => {
  Cat.find({}, {name: 1, position: 1, id: 1}, (err, data) => {
    console.log(data);
  });
};

exports.getById = (req, res, next) => {
  console.log(req.params.id);
  res.json({
    name: 'test 1',
    position: 1,
    id: 25,
  });
};

exports.update = (req, res, next) => {
  console.log(req.body);
  res.json({
    name: 'test 1',
    position: 1,
    id: 25,
  });
};

exports.create = (req, res, next) => {
  const cat = new Cat(req.body);

  cat.save((err, data) => {
    if(err) return res.json({ error: err });

    return res.json({ data: data });
  });

};

exports.remove = (req, res, next) => {
  console.log(req.params.id);
  res.json({ error: false });
};
