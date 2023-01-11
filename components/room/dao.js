const Room = require('./model');

exports.createRoom = (data) => {
    return new Promise(
        (resolve,reject)=> Room.create({
            ...data
        },(err,doc)=> {
            if(err) return reject(false);
            return resolve(true);
        })
    )
}

exports.getMyRooms = (id) => {
    return new Promise(
        (resolve,reject)=> Room
        .find({$or:[{accept:id},{invite:id}]})
        .exec((err,docs)=> {
            if(err) return reject(err);
            return resolve(docs);
        })
    )
}