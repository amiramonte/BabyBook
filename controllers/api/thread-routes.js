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


// POST route for new thread
router.post('/', async(req,res) => {
    try {
        const newThread = await Thread.create({
            title:req.body.title,
            content:req.body.content,
            UserId:req.session.user.id 
        })

        if (req.session.user) {
            return res.status(200).json(newThread);
        }
    
    } catch (error) {
        return res.status(400).json(error);
    }

})




module.exports = router;