const express = require('express')
const app = express()
const mongoose = require('mongoose')

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Hello World! API')
  })

app.use(express.json())

  //LISTEN
app.listen(PORT)