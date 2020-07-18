let jwt = require('jsonwebtoken')

module.exports = function(name) {
    const token = jwt.sign({
            name: name
        },
        'secret', {
            expiresIn: '300s'
        });

    return token;
}
