const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = 'SG.1OuT9F6zRpONvtPtBO79MQ.f39LMSFPaDHtolIzON97Rmr9nMMFHvQ569EqHH1B3Ms'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'bruno.santana.ti@gmail.com',
    from: 'bruno.santana.ti@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})