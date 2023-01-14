const { io } = require('../bin/www');
const { verifyToken } = require('../helpers/jwt');
const {userConnect,userDisconnect} = require('./socketController');
const {createRoom, getPosibleRoom} = require('../components/room/dao');

io.on('connection', client => {
    const [valid,user] = verifyToken(client.handshake.headers['auth']);

    
    if(!valid){return client.disconnect();}
    
    userConnect(user.id);
    console.log("Un nuevo cliente se ha conectado!");

    client.join(user.id);
    client.on('getRoom', async(payload) => {
        
        let exist1 = await getPosibleRoom(payload.user,user.id);
        if(!exist1){
            let exist2 = await getPosibleRoom(user.id,payload.user);
            if(!exist2){
                let body = {
                    accept:payload.user,
                    invite:user.id
                }
                let created = await createRoom(body);
                if(created){
                    io.to(user.id).emit('create-room',{
                        created
                    })
                }
            }
            else{
                io.to(user.id).emit('get-room',{
                    exist2
                })
                //enviamos mensaje de q se encontro
            }
        }
        else{
            io.to(user.id).emit('get-room',{
                exist1
            })
            //enviamos mensaje de q se creo
        }
    });

    client.on('disconnect', () => {
        userDisconnect(user.id)
        console.log('Cliente desconectado');
    });

});

