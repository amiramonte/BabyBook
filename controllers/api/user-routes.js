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
         res.status(200).json(userData);
    } catch (error) {
         res.status(400).json(error);
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

         res.status(200).json(newUser);
    
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
             res.status(400).json({message: "Invalid Email/Password. Please check and try again."})
        }

        const validPassword = await bcrypt.compare(req.body.password, currentUser.password);

        if (!validPassword) {
             res.status(400).json({message: "Invalid Email/Password. Please check and try again."})
        }

        req.session.user = {
            id: currentUser.id,
            username: currentUser.username,
            email: currentUser.email
        }

         res.status(200).json(currentUser);

    } catch (error) {
         res.status(400).json(error)
    }
})


// SIGN OUT route for user
router.get('/signout', (req,res) => {
    try {
        req.session.destroy();
        res.json({msg: 'You have successfully signed out!'})    
    } catch (error) {
        res.status(400).json(error);
    }
})





router.get('/showsessions', (req,res) => {
    res.json(req.session);
})




// GET route for single user
router.get('/:id', async (req, res) => {
    try {
      const singleUser = await User.findByPk(req.params.id, {
        include: [Thread, Comment]
      })
       res.status(200).json(singleUser)
    } catch (error) {
         res.status(400).json(error)
    }
  });




module.exports = router;