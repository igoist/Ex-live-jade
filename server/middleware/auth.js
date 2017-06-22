/**
 * 用户认证中件间
 */
const Promise = require('bluebird');
const R = require('ramda');
const P = require('paras');
const S= require('sanctuary');
const session = require('../lib/session');
const userHelper = require('../helper/user');

// redirectToHome :: Response -> IO ()
const redirectToHome = res => res.redirect('/');

const authLayer = (req, res, next) => {
    const cookie = req.cookies;

    return Promise.resolve(cookie)
        .then(S.toMaybe)
        .then(P.mbinds([
            R.prop('sid'),
            session.getSession
        ]))
        .then(S.maybeToNullable)
        .then(R.ifElse(
            R.isNil,
            _ => redirectToHome(res),
            session => {
                req.user = session.user;
                next();
            }
        ))
        .catch(error => res.send(error))
    ;
};

const adminLayer = (req, res, next) => {
    const { user } = req;

    return R.ifElse(
        userHelper.isAdmin,
        _ => next(),
        _ => redirectToHome(res)
    )(user);
};

exports.authLayer = authLayer;
exports.adminLayer = adminLayer;
