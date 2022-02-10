const User = require('./User');
const Thread = require('./Thread');
const Comment = require('./Comment');

Thread.belongsTo(User);

Comment.belongsTo(User);

User.hasMany(Comment);

User.hasMany(Thread);

Comment.belongsTo(Thread);

Thread.hasMany(Comment);


module.exports = {
    User,
    Thread,
    Comment
};