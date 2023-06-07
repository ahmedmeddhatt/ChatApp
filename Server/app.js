const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.join(__dirname, '/../Public')
app.use(express.static(publicPath))

app.get('/', function (req, res) {
  res.send('Hello boy')
})

app.listen(9000, () => {
    
    console.log(`Port 9000 is listening ...`);
})