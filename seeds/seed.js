const sequelize = require('../config/config.js');
const {User, Thread, Comment, Family} = require('../models');


const users = [
    {
        firstname: "Alex",
        lastname: "Miramontes",
        username: "amiramonte",
        email: "alex.r.miramontes@gmail.com",
        password: "password",
        FamilyId: 1
    },
    {
        firstname: "Keara",
        lastname: "Cotter",
        username: "kearac-hub",
        email: "kearacotter@gmail.com",
        password: "password1",
        FamilyId: 1
    },
    {
        firstname: "Lorena",
        lastname: "Zuniga",
        username: "lzvalentin",
        email: "lzuniga1315@gmail.com",
        password: "password2",
        FamilyId: 1
    },
    {
        firstname: "Ben",
        lastname: "Dominguez",
        username: "zortro",
        email: "ben.r.dominguez@gmail.com",
        password: "password3",
        FamilyId: 1
    },

]


const threads = [
    {
        title: "Teething",
        content: "What are your recommendations for when a baby starts teething?",
        UserId: 1
    },
    {
        title: "Baby Clothes",
        content: "Recommendations for baby clothes?",
        UserId: 2
    },
    {
        title: "Diapers",
        content: "Diaper recommendations?",
        UserId: 3
    },
    {
        title: "Toys",
        content: "What are the best toys for my baby?",
        UserId: 4
    },

]

const comments = [
    {
        body: "I recommend this and that for teething!",
        UserId: 1,
        ThreadId: 1
    },
    {
        body: "OshKosh are the best baby clothes!",
        UserId: 1,
        ThreadId: 2

    },
    {
        body: "Huggies are the only way to go for diapers!",
        UserId: 1,
        ThreadId: 3

    },
    {
        body: "soft baby toys are best",
        UserId: 1,
        ThreadId: 4

    },

]


const families = [
    {
        groupname: "Project 2",
    },
]




const seed = async () => {
    await sequelize.sync({force:true});
    await Family.bulkCreate(families);
    await User.bulkCreate(users, {individualHooks:true});
    await Thread.bulkCreate(threads);
    await Comment.bulkCreate(comments);
    console.log("Seeding Successful!");
    process.exit(0);
}

seed();