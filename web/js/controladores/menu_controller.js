var app=angular.module('ababor.menu_controller', []);
app.controller('menuController', ['$scope','disenyo', function($scope,disenyo) {
    $scope.menu_bool = disenyo.get_menu_movil();


    $scope.set_menu_movil = function(){
        disenyo.set_menu_movil();
        $scope.menu_bool = !$scope.menu_bool;
    };   
    $scope.set_menu_movil_false = function(){
        $scope.menu_bool = false;
        disenyo.set_menu_movil_false();
    };

    $scope.get_menu_movil = function(){
        $scope.menu_bool = disenyo.get_menu_movil();
        return $scope.menu_bool;
    };
        
    
    $scope.menulat = function(){
        document.getElementById('menu-izq').style.display = "block";
        document.getElementById('menu-izq-bck').style.display = "block";
    }
}]);
