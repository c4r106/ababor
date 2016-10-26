
//Cargar el módulo para enrutar las páginas
var app = angular.module('ababor.rutas', ['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


    $urlRouterProvider.otherwise("inicio");

    //Estados
    $stateProvider
        .state('inicio', {
            url: "/inicio",
            views:{
                "body": {templateUrl: "./html/cuerpo/inicio.html"}
            }
        })
        
});
