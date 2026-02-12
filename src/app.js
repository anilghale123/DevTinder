const express = require('express');

const app = express();  // creating a server

app.use("/hello",(req, res) => {     //response request handler
    res.send('hello from the server!');
})
app.listen(3001, () => {
    console.log('server is listening on port 3001');
});
