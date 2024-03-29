(function(WS, undefined){

    'use strict';

    WS.utils = {

        _gebi: function(id){
            return document.getElementById(id);
        },

        getParameterByName: function(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

    };

}(window.WS = window.WS || {}));