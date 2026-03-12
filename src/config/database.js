const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://anilghale:PrZCUU9gAP7CcnIP@anilnodejs.spasfpz.mongodb.net/devTinder",
    );
};



module.exports = connectDB;