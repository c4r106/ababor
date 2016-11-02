var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');



app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}));
app.use(bodyParser());

var port = process.env.PORT || 8084;

var router = express.Router();
var ctr_contacto = require('../api/controladores/contacto');
//var ctr_facebook = require('../api/controladores/facebook');




//================================ DIRECTORIOS ===========================================
var os = require('os');
var hostname = os.hostname();
console.log("hostname: "+ hostname)
//================================ DIRECTORIOS ===========================================
if(hostname == "ababor.es")
    __dirname = '/var/www/vhosts/ababor.es/httpdocs/web/';
else if(hostname == "C4R106-4SU6")
    __dirname = 'F:/GIT/ababor/web';
else if(hostname == "C4R106-PC")
    __dirname = 'D:/GIT/ababor/web';
else
    __dirname = '/var/www/vhosts/ababor.es/httpdocs/web/';
app.use(express.static(__dirname));



//================================ CROSSDOMAIN ===========================================

var permitCrossDomainRequests = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //revisar como poner aqui la ruta exacta y no general
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
// some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
};
app.use(permitCrossDomainRequests);
app.use('/index', router);


router.post('/contacto', ctr_contacto.sendEmail);
//router.route('/getPostFacebook')
  //  .get(ctr_facebook.getPostFacebook);

app.listen(port);
console.log('Ejecutandose en el puerto: ' + port);