const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('config');

const db = require('./lib/db');

const routes = require('./route');

let app = express();

app.set('view engine', 'jade');
app.set('views', './app/views');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    resave: false,
    secret: 'huaban live',
    saveUninitialized: true,
    cookie: { secure: true }
}));

/** 载入所有路由 */
app.use(routes);

const port = config.site.port || 3000;

db.init(config.mysql)
    .then(_ => {
        app.listen(port, () => {
            console.log(`server is running on :${port}`);
        });
    })
    .catch(console.error)
;

