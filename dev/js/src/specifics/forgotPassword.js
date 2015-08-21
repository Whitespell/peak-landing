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
        formId: 'forgot-password-form',
        onSuccess: function(){
            WS.notification.show('success', 'Thank you! Your password has been changed');
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/users/reset',
                type: 'post',
                data: {
                    resetToken: validation.inputs.token,
                    userName: validation.inputs.username,
                    newPassword: validation.inputs.password
                },
                dataType: 'json',
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));
