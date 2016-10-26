var app=angular.module('ababor.on_resize_controller', []);
app.controller('onResize',['$scope', function($scope) {

    $scope.autoResize = function() {
        $scope.hWindow = document.body.offsetHeight;
        $scope.wWindow = document.body.offsetWidth;
        $scope.cuerpo = document.getElementById("cuerpo");
        $scope.menu = document.getElementById("menu-container");

        if($scope.menu != null){
            $scope.menu = $scope.menu.offsetHeight;
            $scope.tMain = $scope.hWindow-$scope.menu;
            $scope.cuerpo.style.height = $scope.tMain + "px";
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