const message = (data) => ({
    id:data._id,
    to:data.to,
    from:data.from,
    message:data.message,
    room:data.room
});
const messageList = (resources) =>resources.map((resource)=>message(resource));

module.exports = {
    message,
    messageList
}