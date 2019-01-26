const recipeRouter = require("express").Router();
const {
  getOne,
  getAll,
  createOne,
  deleteOne,
  updateOne,
  validateRequestWithID
} = require("./recipe.controller");

recipeRouter.route("/recipe").post(createOne);

recipeRouter.route("/recipes").get(getAll);

recipeRouter.use("/recipe/:id", validateRequestWithID);

recipeRouter
  .route("/recipe/:id")
  .get(getOne)
  .delete(deleteOne)
  .put(updateOne);

module.exports = recipeRouter;
