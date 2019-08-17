const express = require('express');
const router = express.Router();
const User = require('../BackEnd/models')
const db = require('../BackEnd/sequelizeInstance');


// get all the users
router.get('/', (req, res)=> 
User.findAll()
.then(users=> {
    console.log(users)
    res.sendStatus(200)
})
.catch(err=> console.log('ERROR',err))
);

// add users to database
router.post('/add', (req, res) => 
User.create({firstName: req.body.firstName,
             lastName: req.body.lastName
}) 
.then(user => {console.log('USER',user)
res.send('added')
})
.catch(err => console.log('ERROR',err))
)

// creatre table if not exsist:
// we can use this   User.sync({force: true});
// or this:
db.sync();

module.exports = router;