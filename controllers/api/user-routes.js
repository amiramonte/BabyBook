const express = require('express');
const bcrypt = require('bcrypt');
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



// POST route for create new user
router.post('/sign-up', async(req, res) => {
    try {
        const newUser = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        return res.status(200).json(newUser);
    
    } catch (error) {
        res.status(400).json(error);
    }

})



// SIGN IN route for user
router.post('/sign-in', async(req, res) => {
    try {
        const currentUser = await User.findOne({
            where: {
               email: req.body.email, 
            },
        })

        if (!currentUser) {
            return res.status(400).json({message: "Invalid Email/Password. Please check and try again."})
        }

        const validPassword = await bcrypt.compare(req.body.password, currentUser.password);

        if (!validPassword) {
            return res.status(400).json({message: "Invalid Email/Password. Please check and try again."})
        }

        req.session.user = {
            id: currentUser.id,
            username: currentUser.username,
            email: currentUser.email
        }

        return res.status(200).json(currentUser);

    } catch (error) {
        return res.status(400).json(error)
    }
})


// SIGN OUT route for user
router.get('/sign-out', async(req,res) => {
    req.session.destroy();
    res.json({msg: 'You have successfully signed out!'})
})





router.get('/showsessions', async(req,res) => {
    res.json(req.session);
})









module.exports = router;