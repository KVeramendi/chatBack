const Room = require('./model');

exports.createRoom = (data) => {
    return new Promise(
        (resolve,reject)=> Room.create({
            ...data
        },(err,doc)=> {
            if(err) return reject(false);
            return resolve(doc);
        })
    )
}

exports.getMyRooms = (id) => {
    return new Promise(
        (resolve,reject)=> Room
        .find({$or:[{accept:id},{invite:id}]})
        .populate({path:'accept',select:'firstName lastName online email'})
        .populate({path:'invite',select:'firstName lastName online email'})
        .exec((err,docs)=> {
            if(err) return reject(err);
            return resolve(docs);
        })
    )
}

exports.getPosibleRoom = (user1,user2) => {
    return new Promise(
        (resolve,reject) => Room
        .findOne({accept:user1,invite:user2})
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}