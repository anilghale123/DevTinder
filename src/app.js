const express = require('express');

const app = express();  // creating a server

app.get("/user", (req,res) => {
   res.send({ firstName: "anil", lastName: 'ghale' })
})

app.post("/user", (req,res) => {
console.log('data saved successfully');
})

app.delete("/user", (req, res) => {
  console.log("data deleted successfully");
});

app.use("/hello",(req, res) => {     //response request handler   // /hello here, if user press anything after hello will return this compare nearest match
    res.send('hello from the server!');
})
// order of the routes matter a lot
app.listen(3001, () => {
    console.log('server is listening on port 3001');
});
