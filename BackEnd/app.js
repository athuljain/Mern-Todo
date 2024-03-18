const express=  require("express")

const app=express()
require("./Conn/conn")

const auth= require('./Routes/auth')

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.use("/api/v1",auth)

app.listen(1000,()=>{
    console.log("server connected");
})