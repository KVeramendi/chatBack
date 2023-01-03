const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token = '')=>{
    try{
        const {user} = jwt.verify(token,process.env.SEED);
        return [true,user];
    }
    catch (error){
        return [false,null];
    }
}

module.exports = {
    verifyToken
}