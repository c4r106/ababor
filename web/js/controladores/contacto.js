var app=angular.module('ababor.contacto_controller', []);
var source_ip = location.hostname;
var servidor_externo;
var puerto = 8084;
if(source_ip == "localhost")servidor_externo = 'http://localhost:'+puerto;
else servidor_externo = 'http://ababor.es:'+puerto;

app.controller('contactoController', ['$scope', '$http', '$animate', function($scope, $http, $animate) {
    $scope.formato_nombre = /^[A-Za-z áéíúóàèìùòÀÈÌÒÙÁÉÍÓÚçÇñÑäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]{3,60}$/;
    $scope.formato_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    $scope.formato_texto = /^[0-9A-Za-z áéíúóàèìùòÀÈÌÒÙÁÉÍÓÚçÇñÑäëïöüÄËÏÖÜâêîôûÂÊÎÔÛ]{3,}$/;
    //anyadir o quitar patron para el mensaje

    $scope.user = {};
    $scope.user.nombre= '';
    $scope.user.email= '';
    $scope.user.asunto= '';
    $scope.user.mensaje= '';

    $scope.enviarConsulta = function () {
        if($scope.user.nombre != '' && $scope.user.email != '' && $scope.user.asunto != '' && $scope.user.mensaje != ''){
            console.log("Enviamos consulta")
            var data = ({
                contactName : $scope.user.nombre,
                contactEmail : $scope.user.email,
                contactSubject : $scope.user.asunto,
                contactMsg : $scope.user.mensaje
            });

            // Simple POST request example (passing data) :
            $http.post(servidor_externo+'/index/contacto', data)
                .success(function(data, status, headers, config) {
                    alert('Mensaje enviado');
                })
                .error(function(data, status, headers, config) {});
        }

 
    };
}]);