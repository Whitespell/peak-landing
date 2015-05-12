(function(WS, undefined){

    WS.notification = {

        init: function(){
            this._el = WS.utils._gebi('notification');

            if(!this._el) return;

            this._Bel = B(this._el);
        },

        show: function(state, content){
            var Bel = this._Bel;

            this._el.innerHTML = content;

            Bel.removeClass('notification--error');
            Bel.removeClass('notification--success');

            switch(state){
                case 'error':
                    Bel.addClass('notification--error');
                    break;
                case 'success':
                    Bel.addClass('notification--success');
                    break;
            }

            Bel.removeClass('notification--is-hidden');
        },

        hide: function(){
            this._Bel.addClass('notification--is-hidden');
        }

    };

    WS.notification.init();

}(window.WS = window.WS || {}));