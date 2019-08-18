const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3001
const db = require('./BackEnd/sequelizeInstance')

// parse application/json
app.use(bodyparser.json());

app.use(
  bodyparser.urlencoded({
    extended: true
  })    
);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
//   app.get('/endpoint', function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for all origins!'})
//   })


app.get('/', (req, res) => res.send('Hello World!'));
app.use('/route', require('./routes/exRout'))


// test database connection
db.authenticate()
    .then(()=> console.log('DB connected'))
    .catch(err=> console.log('err' + err))
// enable server port
const PORT = process.env.PORT || port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))