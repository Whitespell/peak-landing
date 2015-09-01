new WS.httpFormHelper({
    formId: 'forgot-password-form',
    onSuccess: function(){
        WS.notification.show('success', 'Thank you! Your password has been changed');
    },
    doRequest: function(validation, onSuccess, onError){
        // B.ajax({
        //     url: 'https://peakapi.whitespell.com/users',
        //     type: 'post',
        //     data: {
        //         username: validation.inputs.username,
        //         email: validation.inputs.email,
        //         password: validation.inputs.password,
        //         publisher: (WS.utils.getParameterByName('publisher') ? 1 : 0)
        //     },
        //     dataType: 'json',
        //     success: onSuccess,
        //     error: onError
        // });
    }
});
