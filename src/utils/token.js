const moment = require('moment');
const jwt = require('jwt-simple');

const createToken = (user) => {
    const payload = {
        idUsuario: user.username,
        correo: user.correo,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'minutes').unix()
    }

    return jwt.encode(payload, 'Token para la autentificacion de usuario');
}

module.exports = createToken;