(function(WS, undefined){

    'use strict';

    //get email
    var inputEl = document.getElementById('signup-email-input');
    if(!inputEl) return;
    inputEl.value = WS.utils.getParameterByName('email');

    //get email
    var isPublisherSignup = false;//!!WS.utils.getParameterByName('publisher'); publisher signup is currently disabled
    if(isPublisherSignup){
        var titleEl = document.getElementById('form-title');
        titleEl.innerText = titleEl.getAttribute('data-publisher-text');
    }

    new WS.httpFormHelper({
        formId: 'signup-form',
        onSuccess: function(){
            WS.notification.show('success', 'Thank you! We\'ll get in touch as soon as we release!');
        },
        doRequest: function(validation, onSuccess, onError){
            B.ajax({
                url: 'https://peakapi.whitespell.com/users',
                type: 'post',
                data: {
                    userName: validation.inputs.username,
                    email: validation.inputs.email,
                    password: validation.inputs.password,
                    publisher: (WS.utils.getParameterByName('publisher') ? 1 : 0)
                },
                dataType: 'json',
                success: onSuccess,
                error: onError
            });
        }
    });

}(window.WS = window.WS || {}));