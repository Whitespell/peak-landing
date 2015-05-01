(function(){

    'use strict';

    var _gebi = function(id){
        return document.getElementById(id);
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

        var emailForm = _gebi('email-form'),
            emailInput = _gebi('email-input'),
            sendBtn = _gebi('email-send-btn'),

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

                var val = emailInput.value;

                if(!/.+\@.+\..+/.test(val)){
                    showState('error');
                    return false;
                }

                //send email
                BsendBtn.addClass('is-mailing');

                var onRes = function(res){
                    BsendBtn.removeClass('is-mailing');
                    if(res.success) {
                        showState('success', true);
                        document.activeElement.blur();
                    } else {
                        showState('error');
                    }
                };

                B.ajax({
                    url: '../php/form.php',
                    type: 'post',
                    data: 'email='+val,
                    dataType: 'json',
                    success: onRes
                });
            };

        B(emailForm).on('submit', sendMail);
        BsendBtn.click(sendMail);

    }());

}());