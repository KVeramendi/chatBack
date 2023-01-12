const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token = '')=>{
    try{
        const {id} = jwt.verify(token,process.env.SEED);
        return [true,id];
    }
    catch (error){
        return [false,null];
    }
}

module.exports = {
    verifyToken
}