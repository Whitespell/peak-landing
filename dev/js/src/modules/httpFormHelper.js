(function(WS, undefined){

    'use strict';

    WS.httpFormHelper = function(options){
        this._el = WS.utils._gebi(options.selector);
        if(!this._el) return;

        this._options = options;
        this._performingState = false;

        var sendBtn = WS.utils._gebi(options.selector+'__send-btn');
        this._BsendBtn = B(sendBtn);

        this._bindEvents();
    };

    WS.httpFormHelper.prototype = {

        _bindEvents: function(){
            B(this._el).on('submit', this._send.bind(this));
            this._BsendBtn.click(this._send.bind(this));
        },

        _showState: function(stateName, freezeOnState){
            var self = this,
                BsendBtn = this._BsendBtn;

            this._performingState = true;

            BsendBtn.addClass('button--send--is-hidden');
            setTimeout(function(){
                BsendBtn.removeClass('button--send--is-hidden');
                BsendBtn.addClass('button--send--is-'+stateName);

                if(!freezeOnState){
                    setTimeout(function(){
                        BsendBtn.addClass('button--send--is-hidden');
                        setTimeout(function(){
                            BsendBtn.removeClass('button--send--is-'+stateName);
                            BsendBtn.removeClass('button--send--is-hidden');
                            self._performingState = false;
                        }, 300);
                    }, 1000);
                }
            }, 300);
        },

        _validate: function(){
            var inputs = this._el.getElementsByTagName('input'),
                inputsList = {},
                formValid = true;

            //loop inputs
            for(var i = 0, inputsl = inputs.length; i < inputsl; i++){
                var curr = inputs[i],
                    val = curr.value;

                //add to inputs list
                inputsList[curr.getAttribute('name')] = val;

                //check if input is required
                if(!curr.hasAttribute('required')){
                    continue;
                }

                //check if input is valid
                var valid;
                switch(curr.getAttribute('type')){
                    case 'email':
                        valid = (/.+\@.+\..+/.test(val));
                        break;
                    default:
                        valid = (val !== '');
                        break;
                }

                if(!valid){
                    B(curr.parentNode).addClass('input-wrapper--has-error');
                    formValid = false;
                } else {
                    B(curr.parentNode).removeClass('input-wrapper--has-error');
                }
            }

            //check if form is valid
            if(!formValid){
                return {
                    success: false,
                    inputs: inputsList
                };
            } else {
                return {
                    success: true,
                    inputs: inputsList
                };
            }
        },

        _send: function(e){
            e.preventDefault();
            if(this._performingState) return false;

            var BsendBtn = this._BsendBtn,
                self = this,
                validation = this._validate();

            if(!validation.success){
                self._showState('error');
                return false;
            }

            //send email
            BsendBtn.addClass('button--send--is-mailing');

            var onSuccess = function(res, xhr){
                BsendBtn.removeClass('button--send--is-mailing');

                self._showState('success', true);
                document.activeElement.blur();
                self._options.onSuccess(res, xhr);
            },
            onError = function(res, xhr){
                BsendBtn.removeClass('button--send--is-mailing');

                self._showState('error');
                if(res.errorMessage){
                    WS.notification.show('error', res.errorMessage);
                } else {
                    WS.notification.show('error', 'Looks like something went wrong, please try again or <a href="mailto:info@whitespell.com?subject=Got a '+xhr.status+' error on '+window.location.href+'">notify</a> us.');
                }
            };

            self._options.doRequest(validation, onSuccess, onError);
        }

    };

}(window.WS = window.WS || {}));
