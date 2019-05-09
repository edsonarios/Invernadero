
FCM = require('fcm-node');

var SERVER_API_KEY='AAAA_mbOYVk:APA91bGgUEkx19pOnVuveK4PGZn3rnbx1rPydrjp7riA349i9qSI8zLNoObLlW8bl8vuZqMWI2VDy78Z3JB7HDzDeVbvtD6rR0VbNQLRcYgp34xkuRNi5Z4aeOWJM0gwwuEfBXqsvdZd';//put your api key here

var validDeviceRegistrationToken = 'fWwer6JW9dI:APA91bHWr4LxwF8wEllEVl5PgvU9Q_Tw9MBiF1PVDJlAnDktf25-IZBbMxhRqXkVcfGYCQdayFGtMpoektcgawf8phB6wjovIACkdjDL9s-qzEYAQgK00G5ug4a2AWL2zK439WZd4JAt'; //put a valid device token here
//fWwer6JW9dI:APA91bHWr4LxwF8wEllEVl5PgvU9Q_Tw9MBiF1PVDJlAnDktf25-IZBbMxhRqXkVcfGYCQdayFGtMpoektcgawf8phB6wjovIACkdjDL9s-qzEYAQgK00G5ug4a2AWL2zK439WZd4JAt

var fcmCli= new FCM(SERVER_API_KEY);

var payloadOK = {
    to: validDeviceRegistrationToken,
    data: { //Algunos datos (Opcional)
        dato1: 'dato opcional 1',
        dato2: 'dato opcional 2',
        dato3: 'dato opcional 3'
    },
    priority: 'high',
    content_available: true,
    notification: { //Notificacion
        title: 'Error de bomba 1',                    //TITULO
        body: 'Ya valio madres la bomba.. aguas..!!!',                 //CUERPO
        sound : "default", badge: "1"                       //EXTRAS
    }
};


/*var payloadError = {
    to: "4564654654654654", //invalid registration token
    data: {
        url: "news"
    },
    priority: 'high',
    content_available: true,
    notification: { title: 'TEST HELLO', body: '123', sound : "default", badge: "1" }
}; */ 

/*var payloadMulticast = {
    registration_ids:["4564654654654654",
        '123123123',
        validDeviceRegistrationToken, //valid token among invalid tokens to see the error and ok response
        '123133213123123'],
    data: {
        url: "news"
    },
    priority: 'high',
    content_available: true,
    notification: { title: 'Hello', body: 'Multicast', sound : "default", badge: "1" }
};*/

var callbackLog = function (sender, err, res) {
    console.log("\n__________________________________")
    console.log("\t"+sender);
    console.log("----------------------------------")
    console.log("err="+err);
    console.log("res="+res);
    console.log("----------------------------------\n>>>");
};

function sendOK()
{
    fcmCli.send(payloadOK,function(err,res){
        callbackLog('sendOK',err,res);
    });
}

function sendError() {
    fcmCli.send(payloadError,function(err,res){
        callbackLog('sendError',err,res);
    });
}

function sendMulticast(){
    fcmCli.send(payloadMulticast,function(err,res){
        callbackLog('sendMulticast',err,res);
    });
}


sendOK();
//sendMulticast();
//sendError();