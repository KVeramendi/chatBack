const room = (data) => ({
    id:data._id,
    accept:data.accept,
    invite:data.invite,
    last_message:data.last_message,
});
const roomList = (resources) =>resources.map((resource)=>message(resource));

module.exports = {
    room,
    roomList
}