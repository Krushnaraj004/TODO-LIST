const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema, object mapping
const friendSchema = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    Phone: {
        type: Number,
    },
});
//we have to perform CRUD operation
const FriendModal = mongoose.model("FriendModal", friendSchema);
module.exports = { FriendModal };