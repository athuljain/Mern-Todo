const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your front-end URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json());

const userRoute = require('./routes/userRoute');
const todoRoute = require('./routes/todoRoute');

app.use("/user", userRoute);
app.use('/todo', todoRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
