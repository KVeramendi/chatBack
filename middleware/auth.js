const jwt = require('jsonwebtoken');
require('dotenv').config();
let validateToken = (request,response,next)=>{
    let token = request.get('Auth');
    jwt.verify(token,process.env.SEED,(err,decoded)=>{
        if(err){
            console.log(err);
            response.status(403).json({
                message:"Invalid token"
            });
            return;
        }
        request.user = decoded.user;
        next();
    });
}

module.exports = validateToken;