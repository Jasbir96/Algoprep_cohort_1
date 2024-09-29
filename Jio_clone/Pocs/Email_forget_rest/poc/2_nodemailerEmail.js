const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


// thorugh which service you have to send the mail 
const sendGridDetails = {
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    }
}

const msg = {
    to: 'jasbir.singh19906@gmail.com',
    from: 'jasbir.singh@scaler.com', // Change to your verified sender
    subject: 'Sending First Email',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

const transporter = nodemailer.createTransport(sendGridDetails);

transporter
.sendMail(msg)
.then(() => {
    console.log('Email sent')
})
    .catch((error) => {
        console.error(error)
    })

