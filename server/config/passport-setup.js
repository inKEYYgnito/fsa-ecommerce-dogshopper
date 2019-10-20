const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const { User } = require('../db/db').models

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id)
    done(null, user.dataValues)
})

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/redirect'
    }, async (accessToken, refreshToken, profile, done) => {
        let googleId = profile.id
        let user = await User.findOne({ where: { googleId }})
        if (!user) {
            const name = profile.displayName
            const email = profile.emails[0].value
            user = await User.create({ name, email, googleId })
        }
        done(null, user.dataValues)
    })
)
