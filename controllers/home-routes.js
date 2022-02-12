const { User, Thread, Comment } = require('../models');

const router = require('express').Router();

router.get('/dashboard', async (req, res) => {
    res.render('dash')
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
            include: [Comment]
        });

        console.log('====================');
        console.log(threadData);
        console.log('====================');
    
        const threads = threadData.map((thread) => thread.get({plain:true}));
    
        console.log('====================');
        console.log(threads);
        console.log('====================');
    
    
        res.render('forum', {allThreads:threads})
    
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports= router;