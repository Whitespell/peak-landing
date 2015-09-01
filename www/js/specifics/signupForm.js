new WS.httpFormHelper({
    formId: 'signup-form',
    onSuccess: function(){
        WS.notification.show('success', 'Thank you! We\'ll get in touch shortly');
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
