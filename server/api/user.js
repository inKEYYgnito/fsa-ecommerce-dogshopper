const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('get user route-->', req.user)
    res.send(req.user)
})

module.exports = router
