const router = require('express').Router();

const userRoutes = require('./user-routes');
const threadRoutes = require('./thread-routes');
const commentRoutes = require('./comment-routes');
const babyRoutes =  require('./baby-route')

router.use('/user', userRoutes);
router.use('/thread', threadRoutes);
router.use('/comment', commentRoutes);
router.use('/baby', babyRoutes)

module.exports = router;