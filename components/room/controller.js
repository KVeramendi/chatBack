const RoomDao = require('./dao');
const RoomDto = require('./dto');

exports.getMyRooms = async(request,response) => {
    const id = request.user.id;
    console.log("My Idddddd",id);
    const myRooms = await RoomDao.getMyRooms(id);
    return response.send(RoomDto.roomList(myRooms));
}