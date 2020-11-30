const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises'); 
const usersRouter = require('./routes/users');

const beerRouter = require('./routes/beers'); 

const imageRouter = require('./routes/images')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/beers', beerRouter);
app.use('/images', imageRouter);



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});