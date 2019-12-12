const crypto = require('crypto');

module.exports = (payload) => {
    const hash = crypto.createHash('sha512');
    const data = hash.update(payload, 'utf-8');
    return data.digest('hex');
}