
/**
 * Books Router
 * @module routes/books
 * @author Haykuhi Hovhannisyan
 */

const express = require('express');

const routerBk = express.Router();
const bk = require('../controllers/Books');


routerBk.get('/', bk.getAll);
routerBk.get('/:id', bk.getById);
routerBk.delete('/:id', bk.remove);
routerBk.post('/', bk.create);
routerBk.patch('/:id', bk.update);

module.exports = routerBk;
