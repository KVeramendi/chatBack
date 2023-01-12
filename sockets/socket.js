const { io } = require('../bin/www');
const { verifyToken } = require('../helpers/jwt');
const {userConnect,userDisconnect} = require('./socketController');

io.on('connection', client => {
    const [valid,user] = verifyToken(client.handshake.headers['auth']);

    if(!valid){return client.disconnect();}

    userConnect(user._id);

    client.join(user._id);


    client.on('disconnect', () => {
        userDisconnect(user._id)
        console.log('Cliente desconectado');
    });

});

