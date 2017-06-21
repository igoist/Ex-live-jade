const express = require('express');
let Router = express.Router();

Router.use('/:id', (_, res) => {
    res.render('index');
});

Router.use('/static', express.static('public'));

module.exports = Router;
