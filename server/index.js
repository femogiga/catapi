const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const catRoute = require('./routes/carRoute.js')
dotenv.config({})
const app = express()
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use('/cats', catRoute)
app.get('/', (req, res) => {
    res.send('Welcome to app')
})

const port = 9000

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
