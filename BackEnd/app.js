const express=  require("express")

const app=express()
require("./Conn.js/conn")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(1000,()=>{
    console.log("server connected");
})