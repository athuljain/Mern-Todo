const router=require('express').Router();

const User=require("../Models/user")
const List=require("../Models/list")


//create taks

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


//update:

router.put("/updateTask/:id", async (req, res) => {
   
    try {
        const { title, body, email } = req.body;

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
          const list=  await List.findByIdAndUpdate(req.params.id,{title,body})
            list.save().then(()=>res.status(200).json({message:"Task Updated"}))

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error." });
    }
});

//Delete
router.delete("/deleteTask/:id", async (req, res) => {
    console.log("delete task");
    try {
        const {  email } = req.body;

        const existingUser = await User.findOneAndUpdate({email},{$pull:{list:req.params.id}});
        
        if (existingUser) {
          await List.findByIdAndDelete(req.params.id)
            .then(()=>res.status(200).json({message:"Task Delete"}))

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error." });
    }
});


//getTask

router.get("/getTask/:id",async(req,res)=>{
    const list=await List.find({user:req.params.id})
    res.status(200).json({list})
})




module.exports=router