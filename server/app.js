const express = require('express')
const app = express()
const path = require('path')
const cookieSession = require('cookie-session')
const passport = require('passport')

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // expires in 1 day
    keys: [process.env.SESSION_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json());

// API Routes
app.use('/api/auth', require('./api/auth'));
app.use('/api/breeds', require('./api/breeds'));
app.use('/api/dogs', require('./api/dogs'));
app.use('/api/user', require('./api/user'));

app.use('/', express.static('dist'));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../client/index.html')));

app.use(({ message }, req, res, next) => {
  res.status(500).send({ message });
});

module.exports = app;
