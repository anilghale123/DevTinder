const express = require('express');

const app = express();  // creating a server

app.use("/hello", (req, res,next) => {
  res.send("hello from the server!"); 
  next();
},
(req,res,next) => {
  console.log("middleware executed");
  next(); // Call next() to proceed to the next handler
},
(req,res,next) => {
  console.log("second middleware executed");  
}
);