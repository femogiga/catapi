const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const catRoute = require('./routes/carRoute.js')

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use('/cats' , catRoute)
app.get('/', (req, res) => {
    res.send('Welcome to app')
})

const port = 9000

app.listen(port, () => {
    console.log(`listening on ${port}`)
})
