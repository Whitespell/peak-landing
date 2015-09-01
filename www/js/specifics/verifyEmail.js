(function(WS, undefined){

    'use strict';

    //get token
    document.getElementById('token-input').value = WS.utils.getParameterByName('token');

    //
    new WS.httpFormHelper({
        formId: 'verify-email-form',
        submitOnInit: true,
        onSuccess: function(){
            WS.notification.show('success', 'Your email has been verified!');
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/emailToken',
                type: 'post',
                data: {
                    emailToken: validation.inputs.token
                },
                dataType: 'json',
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));
