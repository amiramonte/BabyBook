const router = require('express').Router();
const {Comment, Thread, User} = require('../../models');
const withAuth =  require('../../utils/auth')

// The `/api/comment` endpoint


// POST route for new comment
router.post('/', withAuth, async(req,res) => {
    try {
        const newComment = await Comment.create(req.body)

        return res.status(200).json(newComment);
    
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }

})


// PUT route to update comment
router.put('/:id', withAuth, async(req, res) => {
    try {
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
router.delete('/:id', withAuth, async(req, res) => {
    try {
       

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


module.exports = router;