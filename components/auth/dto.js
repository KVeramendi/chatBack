const user = (data) => ({
    id:data._id,
    email:data.email,
    firstName:data.firstName,
    lastName:data.lastName,
    online:data.online
});

const authData = (token,expiresIn) => ({
    token:token,
    expiresIn:expiresIn,
});

const userList = (resources) =>resources.map((resource)=>user(resource));

module.exports = {
    user,
    userList,
    authData
}