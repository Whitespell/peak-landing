(function(WS, undefined){

    'use strict';

    //get token
    var inputEl = document.getElementById('token-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('token');

    inputEl = document.getElementById('username-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('username');

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
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));
