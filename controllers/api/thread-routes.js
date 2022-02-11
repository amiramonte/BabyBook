const router = require('express').Router();
const {Thread, Comment, User} = require('../../models');


// The `/api/thread` endpoint


// GET route for all threads
router.get('/', async(req,res) => {
    try {
        const threadData = await Thread.findAll({
            include: [User, Comment]
        })
        return res.status(200).json(threadData);
    } catch (error) {
        return res.status(400).json(error);
    }
});






// POST route for new thread
router.post('/', async(req,res) => {
    try {
        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'})
        }
        
        const newThread = await Thread.create({
            title:req.body.title,
            content:req.body.content,
            UserId:req.session.user.id 
        })


        return res.status(200).json(newThread);
    
    } catch (error) {
        return res.status(400).json(error);
    }

})



// PUT route to update thread
router.put('/:id', async(req, res) => {
    try {
        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'});
        }

        const foundThread = await Thread.findByPk(req.params.id)

        if (!foundThread) {
            return res.status(400).json({msg: 'Not able to find this thread!'})
        }


        if (foundThread.UserId !== req.session.user.id) {
            return res.status(400).json({msg: 'You are not able to edit this thread'})
        }

        const updateThread = await Thread.update(req.body, {
            where: {
                id:req.params.id
            }
        })

        return res.status(200).json(updateThread);


    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})



// DELETE route for thread
router.delete('/:id', async(req, res) => {
    try {
        if (!req.session.user) {
            return res.status(400).json({msg: 'Please log in first'});
        }

        const foundThread = await Thread.findByPk(req.params.id);

        if (!foundThread) {
            return res.status(400).json({msg: 'Not able to find this thread!'});
        }

        if (foundThread.UserId !== req.session.user.id) {
            return res.status(400).json({msg: 'You are not able to delete this thread'})
        }

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



// GET route for single thread
router.get('/:id', async (req, res) => {
    try {
      const singleThread = await Thread.findByPk(req.params.id, {
        include: [User, Comment]
      })
      return res.status(200).json(singleThread)
    } catch (error) {
        return res.status(400).json(error)
    }
  });





module.exports = router;