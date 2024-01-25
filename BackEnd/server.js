const express= require ('express')
const mongoose= require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  // Middlewares
app.use(cors());
app.use(bodyParser.json());


app.use(cors({
  origin: 'http://localhost:3000',  // Replace with your front-end URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


const userRoute = require('./routes/userRoute')

app.use("/user",userRoute)



app.listen(port, () => console.log(`Server started on port ${port}`));