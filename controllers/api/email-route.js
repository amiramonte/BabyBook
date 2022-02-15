const router = require('express').Router();
const withAuth = require('../../utils/auth');
const nodemailer = require('nodemailer');


// The `/api/email` endpoint

router.post('/', withAuth, async(req, res) => {
    try {
  
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'np4opop5bhizsznv@ethereal.email',
            pass: 'CM1hW4UTmDendAC39b'
        }
    });  
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"BabyBook" <BabyBookAdmin@BabyBook.com>', // sender address
      to: "alex.r.miramontes@gmail.com, kearacotter@hotmail.com, lzuniga1315@gmail.com, ben.r.dominguez@gmail.com ", // list of receivers
      subject: "New Playdate Planned", // Subject line
      text: "There is a new playdate planned! Log in to BabyBook to see when it is!", // plain text body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        
    res.status(200).json(info);

    } catch (error) {
        res.status(400).json(error);
    }
})


module.exports = router;