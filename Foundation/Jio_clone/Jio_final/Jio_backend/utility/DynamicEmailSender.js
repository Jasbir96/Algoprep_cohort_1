const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();
const fs = require("fs");


async function updateTemplateHelper(templatePath, toReplaceObject) {
    let templateContent = await fs.promises.readFile(templatePath, "utf-8");
    const keyArrs = Object.keys(toReplaceObject);
    keyArrs.forEach((key) => {
        templateContent = templateContent.replace(`#{${key}}`, toReplaceObject[key]);
    })
    return templateContent;
}

async function emailSender(templatePath, recieverEmail, toReplaceObject) {
    try {
        const content = await updateTemplateHelper(templatePath, toReplaceObject);
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
            to: recieverEmail,
            from: 'jasbir.singh@scaler.com', // Change to your verified sender
            subject: 'Sending First Email',
            text: "",
            html: content,
        }
        const transporter = nodemailer.createTransport(sendGridDetails);
        await transporter.sendMail(msg);
    } catch (err) {
        console.log("email not send because of the errro", err);
    }
}

module.exports = emailSender;
// demo
// const toReplaceObject = {
//     name: "Jasbir",
//     otp: "1234"
// }

//  emailSender("./templates/otp.html", "jasbir.singh19906@gmail.com", toReplaceObject).then(()=>{
//     console.log("Email is send");
//  })





