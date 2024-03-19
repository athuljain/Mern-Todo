const router=require('express').Router();

const User=require("../Models/user")
const List=require("../Models/list")

// router.post("/addtask", async(req,res)=>{
// try {
//     const {title,body,email}=req.body
// const existingUser=await User.findOne({email})
// if(existingUser){
//     const list=new List({title,body,user:existingUser})
//     await list.save().then(()=>res.status(200).json({list}))
//     existingUser.list.push(list)
//     existingUser.save()
// }
    
// } catch (error) {
//     console.log(error)
// }
// })


router.post("/addtask", async (req, res) => {
    console.log("addtask");
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });

        console.log(existingUser);
        
        if (existingUser) {
            const list = new List({ title, body, user: existingUser });
            await list.save();

            // Push the list to the user's list array and save the user
            existingUser.list.push(list);
            await existingUser.save();

            // Send response after all operations are completed
            res.status(200).json({ list });
        } else {
            res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error." });
    }
});


module.exports=router