const hashSha512 = require('./hash');

module.exports = ({masterId, masterSecret}) => {
    const config = readConfig();
    const genHash = hashSha512(masterSecret);
    return masterId === config.masterId && config.masterSecret === genHash;
}

function readConfig() {
    return require('../config.json')
}