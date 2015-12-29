(function(WS, undefined){

    WS.promoVidDialog = {

        init: function(){
            var el = this._el = WS.utils._gebi('js-dialog');
            if(!el) return;

            this._Bel = B(el);

            this._bindEvents();
        },

        _bindEvents: function(){
            B(  WS.utils._gebi('js-dialog-open') ).click(this._show.bind(this));
            B(  WS.utils._gebi('js-dialog-close') ).click(this._hide.bind(this));
        },

        _createIframe: function(){
            var el = document.createElement('iframe');
            el.setAttribute('src', 'https://www.youtube.com/embed/KKvYVeYL1Fw?autoplay=1');
            el.setAttribute('frameborder', '0');
            el.setAttribute('allowfullscreen', '1');
            this._iframe = el;
            this._el.appendChild(el);
        },

        _removeIframe: function(){
            if(this._iframe){
                this._el.removeChild(this._iframe);
            }
        },

        _show: function(state, content){
            this._createIframe();
            this._Bel.addClass('dialog--visible');
        },

        _hide: function(){
            this._Bel.removeClass('dialog--visible');
            this._removeIframe();
        }

    };

    WS.promoVidDialog.init();

}(window.WS = window.WS || {}));