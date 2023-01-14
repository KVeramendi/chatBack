const room = (data) => ({
    id:data._id,
    accept:data.accept,
    invite:data.invite,
    last_message:data.last_message,
    status:data.status
});
const roomList = (resources) =>resources.map((resource)=>room(resource));

module.exports = {
    room,
    roomList
}