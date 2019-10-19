const router = require('express').Router()
const passport = require('passport')
require('../config/passport-setup')

// login with google
router.get('/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}))

// redirect route for google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/')
})

// logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router
