const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const recipeRouter = require("./src/resources/recipe/recipe.router");

require("./src/dbStarter");

app.use("/api", recipeRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serving it up on port ${PORT}`);
});
