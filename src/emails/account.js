const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SG_MAIL_KEY

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'bruno.santana.ti@gmail.com',
    from: 'bruno.santana.ti@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})