const mongoose = require("mongoose");

const connectToDB = async (req,res) => {
    try {
        await mongoose.connect("mongodb+srv://athuljainkj2:Todo-Application1@cluster0.2xfps3x.mongodb.net/");
        console.log("Connected to the database");
    } catch (error) {
        res.status(400).json({
            message:"not connected"

        })
        console.error("Error connecting to the database:", error);
    }
};


connectToDB();


