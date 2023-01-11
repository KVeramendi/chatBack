const Message = require('./model');

exports.createMessage = (payload) => {
    return new Promise(
        (resolve,reject)=> Message.create({
            ...payload
        },(err,doc)=> {
            if(err) return reject(false);
            return resolve(true);
        })
    )
}