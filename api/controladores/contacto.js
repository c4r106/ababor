var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var ejs = require('ejs');
var fs = require('fs');
var verifier = require('email-verify');

module.exports = {
    sendEmail: function(req, res) {
        var data = req.body;

        verifier.verify('contacto@ababor.es', function( err, info ){
            if( err ){
                res.json({status: "ERR", message: err, data: info});
                //Falta tratar respuesta en cliente
            }else{
                console.log( "Success (T/F): " + info.success );
                console.log( "Info: " + info.info );
                if(info.success){

                    var ruta= '../web/html/contacto/';
                    var htmlFile = 'email.html';
                    var template = fs.readFileSync(''+ruta+htmlFile,{encoding:'utf-8'});
                    var content = ejs.render(template,data);

                    var mailOptions = {
                        from: 'contacto@ababor.es',
                        to: 'info@ababor.es',
                        subject: 'FORMULARIO CONTACTO: '+data.contactSubject,
                        html: content
                    };
                    transporter.sendMail(mailOptions);
                    res.json(data);
                }else{
                    res.json({data: err,status:"ERR", message: info});
                    return 0;
                }
            }
        });
    }
}