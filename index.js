const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
// const usersRouter = require('./routes/users');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

app.use(express.json());

// app.use('/users',usersRouter);


const MongooseUrl = "mongodb://127.0.0.1:27017/?tls=true&directConnection=true";
mongoose.connect(MongooseUrl)
.then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err);
})
;
const connection = mongoose.connection;

//  listen for 'error' event 'on' the 'connection', if 'error' execute the arrow function.
connection.on("error", (err) => {

  console.log(` Error while connecting to MongoDB database. ${err}`);
});
//  listen for 'disconnected' event 'on' the 'connection', if 'disconnected' execute the arrow function.
connection.on("disconnected", () => {
  console.log(` Connection to MongoDB database lost.`);
});
//  listen for 'reconnect' event 'on' the 'connection', if 'reconnect' execute the arrow function.
connection.on("reconnect", () => {
  console.log(` Re-Connected to MongoDB database.`);
});
//  'once' the 'connection' is 'open', execute the arrow function.
connection.once("open", () => {
  console.log(
    `MongoDB database connection successfully established.`
  );
});
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})