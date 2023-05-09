const mongoose = require("mongoose")
const PersonSchema = new mongoose.Schema({
    fistName: {
        type: String
    },
    lastName:{
        type:String
    }},
    {timestamps : true})
    module.exports = mongoose.model("person", PersonSchema);
