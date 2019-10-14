const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())

// to add api route, use router
// app.use('/api/routeName', require('./api/routeFileName'))

app.use('/', express.static('dist'))
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../client/index.html')))

app.use(({ message }, req, res, next) => {
    res.status(500).send({ message })
})

module.exports = app
