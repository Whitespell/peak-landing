(function(){

    'use strict';

    var _gebi = function(id){
        return document.getElementById(id);
    };

    var getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    //random bg image
    (function(){
        var options = ['skater.jpg', 'runner-clouds.jpeg', 'nomad.jpg'],
            pickedImgUrl = options[Math.floor((Math.random()*(options.length))+0)],
            el = document.getElementsByClassName('bg')[0];

        el.setAttribute('style', 'background-image: url(/img/'+pickedImgUrl+');');
    }());

    //email
    (function(){

        var emailForm = _gebi('signup-form');

        if(!emailForm) return;

        var usernameInput = _gebi('signup-username-input'),
            emailInput = _gebi('signup-email-input'),
            passInput = _gebi('signup-pass-input'),
            sendBtn = _gebi('signup-send-btn'),

            BsendBtn = B(sendBtn),

            performingState = false,
            showState = function(stateName, freezeOnState){
                performingState = true;

                BsendBtn.addClass('is-hidden');
                setTimeout(function(){
                    BsendBtn.removeClass('is-hidden');
                    BsendBtn.addClass('is-'+stateName);

                    if(!freezeOnState){
                        setTimeout(function(){
                            BsendBtn.addClass('is-hidden');
                            setTimeout(function(){
                                BsendBtn.removeClass('is-'+stateName);
                                BsendBtn.removeClass('is-hidden');
                                performingState = false;
                            }, 300);
                        }, 1000);
                    }
                }, 300);
            },

            sendMail = function(e){
                e.preventDefault();
                if(performingState) return false;

                var usernameVal = usernameInput.value,
                    emailVal = emailInput.value,
                    passVal = passInput.value;

                if(!usernameVal || !passVal || !/.+\@.+\..+/.test(emailVal)){
                    showState('error');
                    return false;
                }

                //send email
                BsendBtn.addClass('is-mailing');

                var onRes = function(res){
                    BsendBtn.removeClass('is-mailing');
                    if(res.user_id) {
                        showState('success', true);
                        document.activeElement.blur();
                    } else {
                        showState('error');
                    }
                };

                B.ajax({
                    url: 'http://peakapi.whitespell.com',
                    type: 'post',
                    data: 'username='+usernameVal+'&email='+emailVal+'&password='+passVal+'&publisher='+(getParameterByName('publisher') ? 1 : 0),
                    dataType: 'json',
                    success: onRes
                });
            };

        B(emailForm).on('submit', sendMail);
        BsendBtn.click(sendMail);

    }());

}());