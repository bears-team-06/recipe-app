const Recipe = require("./recipe.schema");

const isIDValid = id => id.match(/^[0-9a-fA-F]{24}$/);

const validateRequestWithID = (req, res, next) => {
  const recipeID = req.params.id;
  if (!recipeID) {
    throw new Error("ID is not passed");
  } else if (isIDValid(recipeID)) {
    next();
  } else {
    throw new Error(`ID:${req.params.id} is invalid`);
  }
};

function getOne(req, res, next) {
  Recipe.findById(req.params.id, (err, document) => {
    if (err) {
      next(err);
    } else {
      res.send(document);
    }
  });
}

function deleteOne(req, res, next) {
  Recipe.findByIdAndRemove(req.params.id, (err, document) => {
    if (err) {
      next(err);
    } else {
      res.send(document);
    }
  });
}

function updateOne(req, res, next) {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) {
      next(err);
    } else {
      const modifiedRecipe = recipe;
      modifiedRecipe.name = req.body.name ? req.body.name : modifiedRecipe.name;
      modifiedRecipe.instructions = req.body.instructions
        ? req.body.instructions
        : modifiedRecipe.instructions;
      modifiedRecipe.save((errOnUpdate, updatedRecipe) => {
        if (errOnUpdate) {
          next(errOnUpdate);
        } else {
          res.send(updatedRecipe);
        }
      });
    }
  });
}

function getAll(req, res, next) {
  Recipe.find({}, (err, docs) => {
    if (err) {
      next(err);
    } else {
      res.send(docs);
    }
  });
}

function createOne(req, res, next) {
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, createdRecipe) => {
    if (err) {
      next(err);
    } else {
      res.send(createdRecipe);
    }
  });
}

module.exports = {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne,
  validateRequestWithID
};
