const router = require('express').Router();
const {Thread, Comment} = require('../../models');

// The `/api/thread` endpoint


// GET route for all threads
router.get('/', async(req,res) => {
    try {
        const threadData = await Thread.findAll({
            include: [Comment]
        })
        return res.status(200).json(threadData);
    } catch (error) {
        return res.status(400).json(error);
    }
});






module.exports = router;