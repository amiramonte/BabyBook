const User = require('./User');
const Thread = require('./Thread');
const Comment = require('./Comment');
const Baby =  require('./Baby');
const Family = require('./Family');

Thread.belongsTo(User);

Comment.belongsTo(User);

Baby.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: "CASCADE"
})

Thread.hasMany(Comment);

User.belongsTo(Family);
Family.hasMany(User);

module.exports = {
    User,
    Thread,
    Comment,
    Family
};