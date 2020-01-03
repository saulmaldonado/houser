require('dotenv').config()
const express = require('express')
// const session = require('express-session')
const massive = require('massive')
const {CONNECTION_STRING, SECRET_SESSION, PORT_NUMBER} = process.env
const ctrl = require('./controller')
const app = express()

app.use(express.json())

massive(CONNECTION_STRING)
.then(db => {
      app.set('db', db)
      console.log('db connected 😂')
})

app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)


app.listen(PORT_NUMBER, () => console.log(`listening on port ${PORT_NUMBER}...`))