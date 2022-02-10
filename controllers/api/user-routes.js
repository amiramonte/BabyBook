const router = require('express').Router();
const {User, Thread, Comment} = require('../../models');


// The `/api/user` endpoint

// GET route for all users
router.get('/', async(req,res) => {
    try {
        const userData = await User.findAll({
            include: [Thread, Comment]
        })
        return res.status(200).json(userData);
    } catch (error) {
        return res.status(400).json(error);
    }
});





module.exports = router;