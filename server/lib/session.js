const Redis = require('ioredis');
const config = require('config');
const S = require('sanctuary');
const P = require('paras');

const redis = new Redis(config.session);

// getSession :: String -> IO (Maybe Session)
const getSession = sid => {
    const key = `sess:${sid}`;
    return redis.get(key)
        .then(S.toMaybe)
        .then(P.chain(JSON.parse))
    ;
};

exports.getSession = getSession;
