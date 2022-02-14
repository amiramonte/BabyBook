const router = require('express').Router();

const userRoutes = require('./user-routes');
const threadRoutes = require('./thread-routes');
const commentRoutes = require('./comment-routes');
const babyRoutes =  require('./baby-route');
const familyRoutes = require('./family-routes');

router.use('/user', userRoutes);
router.use('/thread', threadRoutes);
router.use('/comment', commentRoutes);
router.use('/baby', babyRoutes)
router.use('/family', familyRoutes);

module.exports = router;