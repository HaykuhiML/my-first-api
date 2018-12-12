/**
 * Users Router
 * @module routes/users
 * @author Haykuhi Hovhannisyan
 */


const express = require('express');
const routerUs = express.Router();
const us = require('../controllers/users');


us.router.get('/', us.getAll);
us.router.get('/:id', us.getById);
us.router.delete('/:id', us.remove);
us.router.post('/', us.create);
us.router.patch('/:id', us.update);

module.exports = routerUs;
