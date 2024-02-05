const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



// cors
app.use(cors({ origin: true, credentials: true }));




const userRoute = require('./routes/userRoute');
// const todoRoute = require('./routes/todoRoute');

app.use("/user", userRoute);
// app.use('/todo', todoRoute);

// app.listen(port, () => console.log(`Server started on port ${port}`));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("server is active"));

// use routes

const todo= require("./routes/todoRoute")
app.use("/api/todo", todo);

// setting up port

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});