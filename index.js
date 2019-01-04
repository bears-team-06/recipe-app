const express = require('express')
const path = require('path')
const app = express()

app.get('/api/recipe', async (req, res, next) => {
    res.send("Hello world!")
})


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving it up on port ${PORT}`)
})