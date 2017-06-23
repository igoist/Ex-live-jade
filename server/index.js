const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('config');

const db = require('./lib/db');

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

const port = config.site.port || 3000;

db.init(config.mysql)
    /** 载入所有路由 */
    .then(_ => {
        const routes = require('./route');
        app.use(routes);
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on :${port}`);
        });
    })
    .catch(console.error)
;
