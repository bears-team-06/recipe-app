const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
});

const Recipe = model("Recipe", recipeSchema, "Recipe");

module.exports = Recipe;
