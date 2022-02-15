const { User, Thread, Comment, Family } = require('../models');
const withAuth = require('../utils/auth')

const router = require('express').Router();

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const familyData = await User.findAll({
            include: [Family]
        })

        const myFamily = familyData.map((family) => family.get({plain:true}));

        res.render('dash', {myFamily});

    } catch (error) {
        res.status(400).json(error);
    }
})

router.get('/', async (req, res) => {
    res.render('signin')
})

router.get('/sign-up', async (req, res) => {
    res.render('signup')
})


router.get('/forum', async (req, res) => {

    try {
        const threadData = await Thread.findAll({
            include: [User, {
                model: Comment,
                include: [User]
            }]
        });

        const threads = threadData.map((thread) => thread.get({plain:true}));
    
        res.render('forum', {threads})
    
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports= router;