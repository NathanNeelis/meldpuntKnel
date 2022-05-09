const mongoose = require("mongoose");
let url = "mongodb+srv://" + process.env.DB_HOST + "/" + process.env.DB_NAME;

// Resource: Help by Janno
// https://github.com/TuriGuilano/be_example_repo/blob/main/config/mongoose.js
const connectMDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("🐌 connected to the database 🐌 ");
  } catch (error) {
    console.log(`an error occurred: ${error}`);
    throw error;
  }
};

module.exports = connectMDB;
