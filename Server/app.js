const express = require('express')
const http = require('http');

const path = require('path')
const publicPath = path.join(__dirname, '/../Public')

let app = express()

const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);


app.use(express.static(publicPath))

app.get('/', function (req, res) {
  res.send('Hello boy')
})

io.on('connection', (socket) => {
  console.log('Connected From Server');

  socket.on('disconnect', () => {
    console.log('Disconnected From Server');
  });

});


server.listen(9000, () => {
    
    console.log(`Port 9000 is listening ...`);
})