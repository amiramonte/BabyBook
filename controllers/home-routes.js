const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('/dash')
})

router.get('/sign-in', async (req, res) => {
    res.render('signin')
})

router.get('/sign-up', async (req, res) => {
    res.render('signup')
})

module.exports = router