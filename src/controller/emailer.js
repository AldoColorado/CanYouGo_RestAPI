const nodemailer = require('nodemailer');
var codigo= "";


function getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
  }

const sendEmail = (email) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'feimusicapp@gmail.com',
          pass: 'feiMusic#appStreaming'
        }
      });
    
    codigo = getRandomArbitrary(10000, 90999);
      
    const mailOptions = {
        from: 'feimusicapp@gmail.com',
        to: email,
        subject: 'Fei music autenticación',
        text: `Tu codigo de verificación es:  ${codigo}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
            return null;
        } else {
            return codigo;
        }
    });
}

module.exports= {
    async EnviarEmail(req, res) {
        sendEmail(req.body.correo) 
        res.json({
            code: codigo
        })
    }
}


