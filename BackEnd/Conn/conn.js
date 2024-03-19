const mongoose = require("mongoose");


const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://athuljainkj2:Todo-Application1@cluster0.2xfps3x.mongodb.net/");
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Throw the error to handle it outside
    }
};

module.exports=connectToDB

// connectToDB();


