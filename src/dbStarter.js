const { User, Password, mongoUrl } = process.env;
const mongoose = require("mongoose");

if (User && Password && mongoUrl) {
  mongoose.connect(`mongodb://${User}:${Password}@${mongoUrl}`);
} else {
  throw new Error(
    "Data required to connect to mongodb is not present",
    User,
    Password,
    mongoUrl
  );
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("We are connected");
});
