const express=  require("express")

const app=express()
const connectToDB= require("./Conn/conn")

const auth= require('./Routes/auth')
const list = require("./Routes/list")

connectToDB();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
})


app.use("/api/v1",auth)
app.use("/api/v2",list)

app.listen(1000,()=>{
    console.log("server connected - 1000");
})