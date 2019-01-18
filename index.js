const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Recipe = require("./src/schema/recipeSchema");

require("./src/dbStarter");

app.post("/api/recipe", (req, res) => {
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, createdRecipe) => {
    if (err) {
      res.send(err);
    } else {
      res.send(createdRecipe);
    }
  });
});

app.delete("/api/recipe/:id", (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    res.send("Invalid id");
  } else {
    Recipe.findByIdAndRemove(req.params.id, (err, document) => {
      if (err) {
        res.send(err);
      } else {
        res.send(document);
      }
    });
  }
});

// get a recipe // Get
// edit a recipe // PUT

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/recipes", (req, res) => {
  Recipe.find({}, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serving it up on port ${PORT}`);
});
