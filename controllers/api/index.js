const router = require('express').Router();

const userRoutes = require('./user-routes');
const threadRoutes = require('./thread-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/thread', threadRoutes);
router.use('/comment', commentRoutes);

module.exports = router;