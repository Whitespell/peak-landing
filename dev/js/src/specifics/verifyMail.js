(function(WS, undefined){

    'use strict';

    //get token
    var inputEl = document.getElementById('token-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('token');

    inputEl = document.getElementById('username-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('username');

    var formEl = WS.utils._gebi('verify-email-form'),
        socialButtonsEl = WS.utils._gebi('social-buttons');

    //
    new WS.httpFormHelper({
        formId: 'verify-email-form',
        submitOnInit: true,
        onSuccess: function(){
            WS.notification.show('success', 'Your email has been verified!');
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/users/email',
                type: 'post',
                data: {
                    userName: validation.inputs.username,
                    emailToken: validation.inputs.token
                },
                dataType: 'json',
                success: function(res, xhr){
                    B(socialButtonsEl).addClass('is-hidden--is-visible');
                    onSuccess(res, xhr);
                },
                error: function(res, xhr){
                    B(formEl).addClass('is-hidden--is-visible');
                    onError(res, xhr);
                }
            });
        }
    });

}(window.WS = window.WS || {}));
