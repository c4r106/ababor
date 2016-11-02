var ama = angular.module('ababor.on_scrollbar', []);
ama.controller('onScrollbar',['$scope','$window', function($scope,$window) {

}]);
ama.directive("onScrollbar", ['$window', function($window) {
    return {
        link: function($scope, elem, attrs) {
            var setPosition = function () {
                var slider = document.getElementById("banner-img");
                var sliderGradient = document.getElementById("banner-gradient");
                var getScrollbarWidth = function (){
                    var outer = document.createElement("div");
                    outer.style.visibility = "hidden";
                    outer.style.width = "100px";
                    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

                    document.body.appendChild(outer);
                    var widthNoScroll = outer.offsetWidth;
                    // force scrollbars
                    outer.style.overflow = "scroll";
                    // add innerdiv
                    var inner = document.createElement("div");
                    inner.style.width = "100%";
                    outer.appendChild(inner);
                    var widthWithScroll = inner.offsetWidth;
                    // remove divs
                    outer.parentNode.removeChild(outer);
                    return widthNoScroll - widthWithScroll;
                };
                if(slider!=null && sliderGradient!=null){
                    var navegador = document.getElementById('cuerpo-principal');
                    var pantalla =  document.getElementById('cuerpo-principal').offsetWidth;

                    //var tope = document.getElementById("patron");
                    var ancho = getScrollbarWidth();
                    var alto = document.getElementById('cuerpo').offsetHeight;
                    var scroll = 0.5+(0.5 * navegador.scrollTop);
                    var scroll_background = (0.2 * navegador.scrollTop);
                    var scroll_img = ((scroll_background / ((alto / 2) - ((alto / 2) / 2) - ((alto / 2.4) / 2.4)))*100);
                    var color = navegador.offsetHeight-navegador.scrollTop;
                    var color_final = 100/color;
                    if(pantalla>=768-ancho) {
                        slider.style.backgroundPosition = 'center '+scroll_img + 'px';
                        sliderGradient.style.backgroundColor = "rgba(255,255,255," + color_final + ")";

                    }else{
                        //tope.style.top = 0+"px";
                        slider.style.backgroundPosition = 'center 0px';
                        sliderGradient.style.backgroundColor = "rgba(255,255,255,0)";
                    }

                }

            };
            // set our initial position - fixes webkit background render bug
            angular.element(document.getElementById("cuerpo-principal")).bind("scroll", setPosition);
            angular.element(document.getElementById("cuerpo-principal")).bind("touchmove", setPosition);
            setPosition();
        }  // link function
    };
}]);