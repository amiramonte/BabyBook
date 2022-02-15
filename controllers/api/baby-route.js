const router = require('express').Router();
const {Baby} = require('../../models');
const withAuth =  require('../../utils/auth')

// The `/api/comment` endpoint







// POST route for new comment
router.post('/', withAuth, async(req,res) => {
    try {

        const newBaby = await Baby.create({
            ...req.body,
            UserId:req.session.user.id
        })

        return res.status(200).json(newBaby);
    
    } catch (error) {
        return res.status(400).json(error);
    }

})

module.exports =  router;