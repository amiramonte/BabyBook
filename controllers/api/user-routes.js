const router = require('express').Router();
const { User } = require('../../models');


// The `/api/user` endpoint


// POST route for create new user
router.post('/sign-up', async (req, res) => {
    try {
        const newUser = await User.create(req.body)

        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.status(200).json(newUser);
        })


    } catch (error) {
        res.status(400).json(error);
    }

})



// SIGN IN route for user
router.post('/sign-in', async (req, res) => {
    try {
        const currentUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        })

        if (!currentUser) {
            res.status(400).json({ message: "Invalid Email/Password. Please check and try again." })
            return
        }

        const validPassword = currentUser.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ message: "Invalid Email/Password. Please check and try again." })
            return
        }

        req.session.save(() => {
            req.session.userId = currentUser.id;
            req.session.username = currentUser.username;
            req.session.loggedIn = true;

            res.status(200).json({ currentUser, message: "you are now logged in!" });
        })



    } catch (error) {
        res.status(400).json(error)
    }
})


// SIGN OUT route for user
router.post('/sign-out', (req, res) => {
    try {
        req.session.destroy();
        res.json({ msg: 'You have successfully signed out!' })
    } catch (error) {
        res.status(400).json(error);
    }
})


router.get('/showsessions', (req, res) => {
    res.send(req.session)
})




module.exports = router;