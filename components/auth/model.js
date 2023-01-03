const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    imageId:{
        type:String,
        default:''
    },
    imageUrl:{
        type:String,
        default:''
    },
    online:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
});


module.exports = mongoose.model('User',userSchema);