const express = require("express");
const router = express.Router();

const { FriendModal } = require("../model/friends/friend-model");
const friendController = require("../controller/friend/friend-controllers");

router.post("/add/friend", friendController.addFriendController);
     
router.get("/get/friend", async(req, res) => {
    try {
        const friend = await FriendModal.find({});
        res.send(friend);
    } catch (error) {
        console.log("err", error);
        res.send("Something went wrong");
    }
});

router.put("/update/friend", async (req, res) => {
    const _id = req.query._id;
    const data=req.body;
    console.log("data", data);
    try {
        const user = await FriendModal.findByIdAndUpdate({ _id: _id }, { $set: {data} }, { new: true });
        if (data) {
            return res.send("User changed");
        }
    } catch (error) {
        res.send("something went wrong", error);
    }
});

router.delete("/delete/friend", async (req, res) => {
     const _id=req.query._id;  
     console.log("id",_id);       
    try {
        const user= await FriendModal.findByIdAndDelete({_id:_id});
        if(!user)
        {
           return res.send("Invalid User");
        }
        res.send("User removed"); 
    } catch (error) {
       res.send("something went wrong",error);
    }
});

module.exports = router;
