const express = require("express");
const mongoose = require("mongoose");
const app = express(); //creates a server
const friendRoutes = require("./routes/friend-route");

var cors = require('cors');

mongoose.connect(
"mongodb+srv://Krushnaraj004:Banna004@cluster0.dqlkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    )
    .then((data) => console.log("Connected to Database"))
    .catch((err) => console.log("Err occured while connecting to Database",err));

app.use(express.json());
app.use(
    cors({
        origin:"*",
    })
    )
app.use(friendRoutes);

//assigning port
app.listen(8080, function () {
    console.log("Server is up on port 8080");
});


