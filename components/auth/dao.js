const User = require('./model');
const bcrypt = require('bcrypt');
//
exports.createUser = async(data) => {
    return new Promise(
        (resolve,reject)=> User
        .create({
            ...data,
            password:bcrypt.hashSync(data.password,10),
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.viewUser = async(id) => {
    return new Promise(
        (resolve,reject)=>User
        .findById(id)
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.viewAllUser = async(id) => {
    return new Promise(
        (resolve,reject)=>User
        .find({"_id":{$ne:id}})
        .exec((err,docs)=>{
            if(err) return reject(err);
            return resolve(docs);
        })
    );
}

exports.findUserByEmail = async(email) => {
    return new Promise(
        (resolve,reject)=>User
        .findOne({"email":email})
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}
