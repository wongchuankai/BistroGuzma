const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const UserModel = require('./models/user-model');
const menuModel = require('./models/menu-model')

mongoose.connect('mongodb://127.0.0.1:27017/BistroGuzma');
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;
require('./auth/auth');
const routes = require('./routers/routes');
const secureRoute = require('./routers/secret-routes');

const app = express()
require('dotenv').config
const bodyParser = require('body-parser')
const cors = require('cors')
const apiPort = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api', routes);
app.use('/', (req, res) => {
    res.json({ok:"ok"})
});

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

app.listen(apiPort, () => {
    console.log(`server is running at port ${apiPort}`)
})
