const express = require('express');
const Path =  require('path');

let Router = express.Router();

Router.get('/', (_, res) => res.render('index'));
Router.get('/l/:id', (_, res) => res.render('index'));
Router.use('/static', express.static(Path.join(__dirname, '../../public')));

module.exports = Router;
