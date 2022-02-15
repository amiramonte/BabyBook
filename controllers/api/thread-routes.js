const router = require('express').Router();
const {Thread, Comment, User} = require('../../models');
const withAuth =  require('../../utils/auth')


// The `/api/thread` endpoint


// POST route for new thread
router.post('/', withAuth,  async(req,res) => {
    try {
        const newThread = await Thread.create({
         ...req.body,
            UserId:req.session.userId 
        })

        return res.status(200).json(newThread);
    
    } catch (error) {
        return res.status(400).json(error);
    }

})



// PUT route to update thread
router.put('/:id', withAuth, async(req, res) => {
    try {

        const updateThread = await Thread.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(updateThread);


    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})



// DELETE route for thread
router.delete('/:id', withAuth,  async(req, res) => {
    try {

        const deleteThread = await Thread.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json(deleteThread);

    } catch (error) {
        return res.status(400).json(error)
    }
})




module.exports = router;