const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const config = require('config');

const routes = require('./route');

let app = express();

app.set('view engine', 'jade');
app.set('views', './app/views');
app.use(bodyParser.json());
app.use(session({
    resave: false,
    store: new RedisStore(config.redis),
    secret: 'huaban live',
    saveUninitialized: true,
    cookie: { secure: true }
}));

/** 载入所有路由 */
app.use(routes);

const port = config.site.port || 3000;
app.listen(port, () => {
    console.log(`server is running on :${port}`);
});
