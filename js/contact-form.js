$(document).ready(function () {
    $("#applicationButton").bind("click", function () {
        const xhttp = new XMLHttpRequest();
        const botToken = "607809653:AAFDFWG1y0-hgb5f1QcXq9fh9qlyf_eqeG0";
        const chatId = "-184963404";

        let messageText = "";
        let phoneNumber = $("#uPhoneInput").val();
        let mailAdress = $("#uMailInput").val();
        let projectDescription = $("#uName").val();

        if (phoneNumber != "" && mailAdress != "" && projectDescription != "") {
            messageText += "Ім'я: " +  projectDescription  +
                "%0AНомер телефону: " + phoneNumber  +
                "%0AПошта: " + mailAdress;
            xhttp.open(`POST`, `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${messageText}`, false);
            xhttp.send();
        }
    });
});


var container = document.getElementById('changeText');

var things = ['бренды...',' веб-сайты...', 'упаковку...', 'чат-ботов...','рекламные ролики...'];
var t = -1;
var thing = '';
var message = container.innerHTML;
var mode = 'write';
var delay = 1000;

function updateText(txt) {
    container.innerHTML = txt;
}

function tick() {
    
     if(container.innerHTML.length == 0) {
        t++;
        
        thing = things[t];
        message = '';
        mode = 'write';
        if (t == (things.length - 1)){
            t= -1;
        }
        
    }

    switch(mode) {
        case 'write' :
            message += thing.slice(0, 1);
            thing = thing.substr(1);

            updateText(message);

            if(thing.length === 0 && t === (things.length - 1)) {
                window.clearTimeout(timeout);
                return;
            }

            if(thing.length == 0){
                mode = 'delete';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 40);
            }

            break;

        case 'delete' :
            message = message.slice(0, -1);
            updateText(message);

            if(message.length == 0)
            {
                mode = 'write';
                delay = 1500;
            } else {
                delay = 32 + Math.round(Math.random() * 100);
            }
            break;
    }

    timeout = window.setTimeout(tick, delay);
}

var timeout = window.setTimeout(tick, delay);