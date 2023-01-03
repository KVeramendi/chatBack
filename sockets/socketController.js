const User = require('../components/auth/model');

const userConnect = async (id = '')=>{
    const user = await User.findById(id);
    user.online = true;
    await user.save();
    return user;
}
const userDisconnect = async (id = '')=>{
    const user = await User.findById(id);
    user.online = false;

    await user.save();
    return user;
}

module.exports={
    userConnect,
    userDisconnect,
}