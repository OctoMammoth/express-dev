const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())

app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('This page in development')
})

app.listen(PORT, "localhost", () => {
    console.log('backend running on http://localhost:' + PORT)
})
