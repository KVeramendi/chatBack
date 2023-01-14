const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    to:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    from:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    message:{
        type:String,
        required:true
    },
    room:{
        type:Schema.Types.ObjectId,
        ref:'Room',
        required:true
    }

},{timestamps:true});

module.exports = mongoose.model('Message',messageSchema);