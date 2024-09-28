// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail');
const dotenv=require("dotenv");
dotenv.config();
// console.log("sendgrid key", process.env.SENDGRID_API_KEY);

// api key -> email -> technincally 
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const msg = {
    to: 'jasbir.singh19906@gmail.com', 
    from: 'jasbir.singh@scaler.com', // Change to your verified sender
    subject: 'Sending First Email',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })