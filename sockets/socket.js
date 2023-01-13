const { io } = require('../bin/www');
const { verifyToken } = require('../helpers/jwt');
const {userConnect,userDisconnect} = require('./socketController');

io.on('connection', client => {
    const [valid,user] = verifyToken(client.handshake.headers['auth']);

    
    if(!valid){return client.disconnect();}
    
    userConnect(user.id);
    console.log("Un nuevo cliente se ha conectado!");

    client.join(user.id);
    client.on('getRoom', (payload) => {
        console.log(payload);
    });

    client.on('disconnect', () => {
        userDisconnect(user.id)
        console.log('Cliente desconectado');
    });

});

