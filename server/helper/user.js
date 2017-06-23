/**
 * 用户相关认证
 */

const R = require('ramda');

const isAdmin = R.propSatisfies(R.test(/admin/), 'roles');

exports.isAdmin = isAdmin;
