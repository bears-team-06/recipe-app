const mongoose = require("mongoose");
// const mockedRecipes = require("./Mock/Mock");
// const transformRecipeResponse = require("./transformers");
// const Recipe = require("./schema/recipeSchema");
// mongoose.connect("mongodb://user:user12@ds255754.mlab.com:55754/recipe-db"); // this should be in process.env

const { User, Password, mongoUrl } = process.env;
if (User && Password && mongoUrl) {
  mongoose.connect(`mongodb://${User}:${Password}@${mongoUrl}`);
} else {
  throw new Error(
    "Data required to connect to mongodb is not present",
    User,
    Password,
    mongoUrl,
  );
}

const db = mongoose.connection;

// const populateInitialRecipes = () => {
//   const recipes = transformRecipeResponse(mockedRecipes);
//   Recipe.collection.insertMany(recipes, (err) => {
//     if (err) {
//       return console.error(err);
//     }
//     console.log("Recipe collection populated");
//   });
// };

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
  console.log("We are connected");
});
