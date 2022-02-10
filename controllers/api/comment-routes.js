const router = require('express').Router();
const {Comment, Thread, User} = require('../../models');


// The `/api/comment` endpoint

// GET route for all comments
router.get('/', async(req,res) => {
    try {
        const commentData = await Comment.findAll({
            include: [User, Thread]
        })
        return res.status(200).json(commentData);
    } catch (error) {
        return res.status(400).json(error);
    }
});







module.exports = router;