var app=angular.module('ababor.on_resize_controller', []);
app.controller('onResize',['$scope', function($scope) {

    $scope.autoResize = function() {
        $scope.menu = document.getElementById("menu-container");
        if($scope.menu != null){
            $scope.hWindow = document.body.offsetHeight;
            $scope.wWindow = document.body.offsetWidth;
            $scope.cuerpo = document.getElementById("cuerpo");
            /* Poner el tamanyo de la imagen cuadrada respecto al ancho */
            var imagen = document.getElementById("principal-logo");
            if(imagen!=null){
                imagen.style.height = imagen.offsetWidth+"px";
                var texto = document.getElementById("textAlto").offsetWidth;
                if($scope.wWindow >= 480){
                    document.getElementById("logoYtext-container").style.height = imagen.offsetWidth+"px";
                    document.getElementById("logoYtext-container").style.width = imagen.offsetWidth+texto+5+"px";
                    document.getElementById("textAlto").style.lineHeight = imagen.offsetHeight+13+"px";
                }
                else{
                    document.getElementById("logoYtext-container").style.height = "auto";
                    document.getElementById("logoYtext-container").style.width = "auto";
                    document.getElementById("textAlto").style.lineHeight = "36px";
                }
                if($scope.wWindow >= 768){
                    document.getElementById("textAlto").style.lineHeight = imagen.offsetHeight+10+"px";
                    document.getElementById("logoYtext-container").style.width = imagen.offsetWidth+texto+30+"px";
                }
                if($scope.wWindow >= 1140){
                    document.getElementById("textAlto").style.lineHeight = imagen.offsetHeight+15+"px";
                    document.getElementById("logoYtext-container").style.width = imagen.offsetWidth+texto+50+"px";
                }
                if($scope.wWindow >= 1920){
                    document.getElementById("textAlto").style.lineHeight = imagen.offsetHeight+20+"px";
                    document.getElementById("logoYtext-container").style.width = imagen.offsetWidth+texto+50+"px";
                }


            }

            /* ajustar el menu principal en el centro */
            $scope.menuPrin = document.getElementById('menu-pc-container');
            if($scope.menuPrin != null){
                var a = ($scope.wWindow - $scope.menuPrin.offsetWidth)/2;
                $scope.menuPrin.style.left = a + 'px';
            }


            /* Ajustar contenedor principal a la altura de la pantalla */
            var tamanyo_max =  document.getElementById("principal-logo-wrap");
            $scope.altura = document.getElementById("principal-wrap");
            $scope.altura2 = document.getElementById("principal-wrap-2");
            /*
            $scope.altura3 = document.getElementById("principal-wrap-3");
            $scope.altura4 = document.getElementById("principal-wrap-4");
            $scope.altura5 = document.getElementById("principal-wrap-5");
            $scope.altura6 = document.getElementById("principal-wrap-6");
            $scope.altura7 = document.getElementById("principal-wrap-7");
            */

            if(tamanyo_max!=null){
                $scope.menu = $scope.menu.offsetHeight;
                $scope.tMain = $scope.hWindow-$scope.menu;
                $scope.cuerpo.style.height = $scope.tMain + "px";
                var max = tamanyo_max.offsetHeight;
                if($scope.cuerpo.offsetHeight>=tamanyo_max.offsetHeight)
                    var centrar = ($scope.cuerpo.offsetHeight-tamanyo_max.offsetHeight)/3;
                else
                    var centrar = (tamanyo_max.offsetHeight-$scope.cuerpo.offsetHeight)/3;

                if($scope.hWindow <= max){
                    $scope.altura.style.height = max+$scope.menu + "px";
                    $scope.altura2.style.height = max+$scope.menu + "px";
                    /*
                    $scope.altura3.style.height = max+$scope.menu + "px";
                    $scope.altura4.style.height = max+$scope.menu + "px";
                    $scope.altura5.style.height = max+$scope.menu + "px";
                    $scope.altura6.style.height = max+$scope.menu + "px";
                    $scope.altura7.style.height = max+$scope.menu + "px";
                    */
                    tamanyo_max.style.marginTop = centrar-$scope.menu +"px";
                }
                else{
                    $scope.altura.style.height = $scope.cuerpo.offsetHeight + "px";
                    $scope.altura2.style.height = $scope.cuerpo.offsetHeight + "px";
                    /*
                    $scope.altura3.style.height = $scope.cuerpo.offsetHeight + "px";
                    $scope.altura4.style.height = $scope.cuerpo.offsetHeight + "px";
                    $scope.altura5.style.height = $scope.cuerpo.offsetHeight + "px";
                    $scope.altura6.style.height = $scope.cuerpo.offsetHeight + "px";
                    $scope.altura7.style.height = $scope.cuerpo.offsetHeight + "px";
                    */
                    tamanyo_max.style.marginTop = centrar +"px";
                }

                tamanyo_max.style.marginTop = centrar +"px";

            }



        }

    };
    $scope.autoResize();
}]);
app.directive('onResize',  ['$window', function ($window) {
    return {
        link: function($scope) {
            angular.element($window).bind('load', function () {
                $scope.autoResize();
            });
            angular.element($window).bind('resize', function () {
                $scope.autoResize();
            });
            $scope.autoResize();
        }
    }
}]);