const router = require('express').Router();
const {Family, User} = require('../../models');
const withAuth = require('../../utils/auth');

// the `/api/family` endpoint


// GET route for all family
router.get('/', async(req,res) => {
    try {
        const myFamily = await Family.findAll({
            include: [User]
        })

        res.status(200).json(myFamily);

    } catch (error) {
        res.status(400).json(error);
    }
})





module.exports = router;