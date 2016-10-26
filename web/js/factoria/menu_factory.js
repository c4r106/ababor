(function (){
    var disenyo = function(){
        var factory ={};
        var disenyo ={
            menu_bool: false
        };
        //SETTER
        factory.set_menu_movil = function(){
            disenyo.menu_bool = !disenyo.menu_bool;
        };
        factory.set_menu_movil_false = function(){
            disenyo.menu_bool = false;
        };
        //GETTER
        factory.get_menu_movil = function(){
            return disenyo.menu_bool;
        };
        return factory;
    };
    angular.module('ababor').factory('disenyo', disenyo);
}());