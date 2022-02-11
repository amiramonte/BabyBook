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

        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'})
        }

        const newComment = await Comment.create({
            body:req.body.body,
            UserId:req.session.user.id
        })

        return res.status(200).json(newComment);
    
    } catch (error) {
        return res.status(400).json(error);
    }

})


// PUT route to update comment
router.put('/:id', async(req, res) => {
    try {
        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'});
        }

        const foundComment = await Comment.findByPk(req.params.id)

        if (!foundComment) {
            return res.status(400).json({msg: 'Not able to find this comment!'})
        }


        if (foundComment.UserId !== req.session.user.id) {
            return res.status(400).json({msg: 'You are not able to edit this comment'})
        }

        const updateComment = await Comment.update(req.body, {
            where: {
                id:req.params.id
            }
        })

        return res.status(200).json(updateComment);


    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})



// DELETE route for comment
router.delete('/:id', async(req, res) => {
    try {
        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'});
        }

        const foundComment = await Comment.findByPk(req.params.id);

        if (!foundComment) {
            return res.status(400).json({msg: 'Not able to find this comment!'});
        }

        if (foundComment.UserId !== req.session.user.id) {
            return res.status(400).json({msg: 'You are not able to delete this comment'})
        }

        const deleteComment = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(deleteComment);

    } catch (error) {
        return res.status(400).json(error)
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