const transformRecipeResponse = require("./src/transformers");

const express = require('express')
const path = require('path')
const app = express()
const mockedRecipes = require('./src/Mock/Mock')

app.get('/api/recipe', async (req, res, next) => {
    res.send("Hello world!")
})


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get("/api/recipes", (req, res) => {
    res.send(transformRecipeResponse(mockedRecipes))
})

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving it up on port ${PORT}`)
})