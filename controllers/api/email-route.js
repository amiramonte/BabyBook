const router = require('express').Router();
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer');
require('dotenv').config();


// The `/api/email` endpoint

router.post('/', withAuth, async(req, res) => {
    try {
  
        const output = `    
        
        <h1>Hello Family!</h1>

        <h3>WooHoo!</h3>
            
           <h5>A new playdate has been planned! Log on to BabyBook to see when and where. Get your kids together and enjoy some family time!</h5>

        <h5>Sent with &#128150 by BabyBook</h5>`

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.EM_USER,
            pass: process.env.EM_PASS
        }
    });  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"BabyBook" <BabyBookAdmin@BabyBook.com>', // sender address
      to: "alex.r.miramontes@gmail.com, kearacotter@hotmail.com, lzuniga1315@gmail.com, ben.r.dominguez@gmail.com ", // list of receivers
      subject: "New Playdate Planned", // Subject line
      text: "Hello Family! WooHoo! A new playdate has been planned! Log on to BabyBook to see when and where. Get your kids together and enjoy some family time! Sent with love, by BabyBook",
      html: output // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        
    res.status(200).json(info);

    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;