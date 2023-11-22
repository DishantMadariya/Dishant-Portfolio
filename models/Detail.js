const mongoose = require('mongoose');
const ContactDetail = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    subject :{
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
});
const Detail = mongoose.model('Detail', ContactDetail);
module.exports=Detail;