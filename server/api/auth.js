const router = require('express').Router()
const passport = require('passport')
require('../config/passport-setup')

// login with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

// redirect route for google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the app!')
})

// logout
router.get('/logout', (req, res) => {
    res.send('loggin out')
})

module.exports = router
