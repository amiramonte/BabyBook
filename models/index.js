const User = require('./User');
const Thread = require('./Thread');
const Comment = require('./Comment');
const Baby =  require('./Baby')

//where are your foreign keys? also what happens if I delete data that is associated???
Thread.belongsTo(User);

Comment.belongsTo(User);

Baby.belongsTo(User, {
    foreignKey: 'userId', 
    onDelete: "CASCADE"
})

Thread.hasMany(Comment);


module.exports = {
    User,
    Thread,
    Comment
};