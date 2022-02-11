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





// POST route for new comment
router.post('/', async(req,res) => {
    try {
        const newComment = await Comment.create({
            body:req.body.body,
            UserId:req.session.user.id
        })

        if (req.session.user) {
            return res.status(200).json(newComment);
        }
    
    } catch (error) {
        return res.status(400).json(error);
    }

})




// GET route for single comment
router.get('/:id', async (req, res) => {
    try {
      const singleComment = await Comment.findByPk(req.params.id, {
        include: [User, Thread]
      })
      return res.status(200).json(singleComment)
    } catch (error) {
        return res.status(400).json(error)
    }
  });






module.exports = router;