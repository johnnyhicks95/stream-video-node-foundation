
const express = require('express')
const app = express()
// created a server http from express
const http = require('http').Server(app)
// to generate comunication we use socket io
const io = require('socket.io')(http)

// routes
app.use(require('./routes/server.routes'))

// where to charge html files
app.use(express.static(__dirname+"/public"))

// create io connection
io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        // to emit in every listener(sockets on)
        // broadcast: opens a channel
        socket.broadcast.emit('stream', image )
    } )
})

module.exports = http // return a htpp res
