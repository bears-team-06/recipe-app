const recipeRouter = require("express").Router();
const {
  getOne,
  getAll,
  createOne,
  deleteOne,
  updateOne
} = require("./recipe.controller");

recipeRouter.route("/recipe").post(createOne);

recipeRouter.route("/recipes").get(getAll);

recipeRouter
  .route("/recipe/:id")
  .get(getOne)
  .delete(deleteOne)
  .put(updateOne);

module.exports = recipeRouter;
