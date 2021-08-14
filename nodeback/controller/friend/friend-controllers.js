const {FriendModal} =require("../../model/friends/friend-model")
exports.addFriendController = async(req, res) => {
    const data=req.body;
    try{
        const friend = new FriendModal({
            userName: data.userName,
            email: data.email,
            Phone: data.Phone,
        });
        await friend.save();
        res.send(friend);
   }catch(error)
       {
           console.log("error",error);
            res.send("Something went wrong");
       }
};