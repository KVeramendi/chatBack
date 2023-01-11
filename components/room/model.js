const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    accept:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true
    },
    invite:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true
    },
    lastMessage:{
        type:Schema.Types.ObjectId,
        ref:'Message',
        default:null
    },
    status:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

module.exports = mongoose.model('Message',messageSchema);