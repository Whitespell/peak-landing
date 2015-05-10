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

        el.setAttribute('style', 'background-image: url(/peak/img/'+pickedImgUrl+');');
    }());

    //email
    (function(){

        var emailForm = _gebi('email-form'),
            sendBtn = _gebi('email-send-btn'),

            BsendBtn = B(sendBtn),


            sendMail = function(e){
                e.preventDefault();
                window.location = 'https://docs.google.com/a/whitespell.com/forms/d/1l5QnhRGjG44uEUOAZQott8TD2tryxCWZ9YEaxt4NsKQ/viewform?usp=send_form';
            };

        B(emailForm).on('submit', sendMail);
        BsendBtn.click(sendMail);

    }());

}());