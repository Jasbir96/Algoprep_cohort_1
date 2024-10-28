## Agenda
 *  login signup review 
 *  How Emails are send  -> SMTP
 *  `Sendgrid` -> to send email
 *  Creating service provider agnostic Emails -> `nodemailer`
 *  Forget and Reset Password Flow 
  

## Touch points where usually Mails are sent in the user lifecycle
* Signup 
  * Confirm Email
  * Welcome Email(*) 
* Payment Flow Email
        *  payment -> purchase plan
        *  cancel -> cancel plan
* Forget Password 
  * OTP share , reset link
