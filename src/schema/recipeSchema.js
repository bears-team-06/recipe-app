const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  ingredients: String,
  instructions: String,
});

const Recipe = model("Recipe", recipeSchema, "Recipe");

module.exports = Recipe;
