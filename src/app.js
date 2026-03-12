const express = require('express');

const app = express();  // creating a server
const adminAuth = require('./middlewares/auth.js');
const connectDB = require('./config/database.js');
const User = require('./models/user.js');
app.post('/signup', async (req, res) => {
    const userObj = {
        firstName: 'Anil',
        lastName: 'Ghale',
        emailId: 'anil.ghale@example.com',
        password: 'securepassword'
    };

    const user = new User(userObj); //creating new instance of user model and passing userObj data to it
    try{
        await user.save();  // saving data to database
        res.send('User signed up successfully');
    } catch (error) {
        console.error("Error signing up user", error);
        res.status(500).send('Error signing up user');
    }
});

connectDB()
  .then(() => {
    console.log("connected to database successfully");  // first database will get connected then server will start
    app.listen(7777, () => {
    console.log('server is listening on port 7777');
  });
  })
  .catch((err) => {
    console.error("error connecting to database", err);
  });
// app.use("/user", adminAuth);

// app.get("/getUserData", (req,res) => {
//     try{
//     throw new Error("something went wrong");
//       res.send({ firstName: "anil", lastName: 'ghale' })

//     }
//     catch(err){
//         res.status(500).send('some error contact support team!');
//     }
// })
// app.get("/user/:userId/:name/:password", (req,res) => {     // starting with :userId these are dynamic api path
//   //  console.log(req.query);   // here it give query data
//   // console.log(req.params);  // here it give params data
//    res.send({ firstName: "anil", lastName: 'ghale' })
// })

// app.post("/user", (req,res) => {
// console.log('data saved successfully');
// res.send("data recorded");   // if no result send then it will go infinite loop and server will crash, so we need to send response in every route handler
// })

// app.delete("/user", (req, res) => {
//   console.log("data deleted successfully");
// });

// app.use("/hello",(req, res) => {     //response request handler   // /hello here, if user press anything after hello will return this compare nearest match
//     res.send('hello from the server!');  //route handler
// })

// app.use('/', (err, req, res, next) => {   // error handling middleware
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });
// order of the routes matter a lot
// const server = app.listen(7777, () => {
//   console.log('server is listening on port 7777');
// });
 