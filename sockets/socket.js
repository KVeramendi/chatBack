const { io } = require('../bin/www');
const { verifyToken } = require('../helpers/jwt');
const {userConnect,userDisconnect} = require('./socketController');

io.on('connection', client => {
    const [valid,id] = verifyToken(client.handshake.headers['auth']);

    if(!valid){return client.disconnect();}

    userConnect(id);

    client.join(id);


    client.on('disconnect', () => {
        userDisconnect(id)
        console.log('Cliente desconectado');
    });

});

