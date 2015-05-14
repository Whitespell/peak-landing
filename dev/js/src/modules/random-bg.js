//random bg image
(function(WS, undefined){

    'use strict';

    WS.randomBg = {

        init: function(){
            var options = ['skater.jpg', 'runner-clouds.jpeg', 'nomad.jpg'],
                pickedImgUrl = options[Math.floor((Math.random()*(options.length))+0)],
                el = document.body;

            el.setAttribute('style', 'background-image: url(/img/'+pickedImgUrl+');');
        }

    };

    WS.randomBg.init();

}(window.WS = window.WS || {}));