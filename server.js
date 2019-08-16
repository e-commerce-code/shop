const express = require('express')
const app = express()
const port = 3001

const db = require('./BackEnd/sequelizeInstance')

app.get('/', (req, res) => res.send('Hello World!'))

db.authenticate()
    .then(()=> console.log('DB connected'))
    .catch(err=> console.log('err' + err))

const PORT = process.env.PORT || port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))