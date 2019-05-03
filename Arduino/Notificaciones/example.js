
FCM = require('fcm-node');

var SERVER_API_KEY='AAAAkWZnNe4:APA91bF3UUdN10No7yMkJ2k0SXRR4TvlbxSq1EwD8_MBdeOxbRYP37tcXVeyrvlkxbKw0mSQx8GTpf4IGzswW5tG4veMJb7J2Pa1cjGg6PVLG6vXQOpct2LFjk4EKT2pFbmonhvSR5w9';//put your api key here

var validDeviceRegistrationToken = 'fqVVUT623TQ:APA91bFKHC5ldpYC4N5eQnw9GwKtxNs8mAEA6BsRFJ2CbgkfmYTu2AhU3YQKMZonahVRD-V0xGXRAcCN52CSWUg4tfNHmJimFj-J53RozsHeG9H1v058tIxjx59oUEnNkG1XAyWB9fu2'; //put a valid device token here


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
        title: 'TITULO DE NOTIFICACION',                    //TITULO
        body: 'MENSAJE DE LA NOTIFICACION',                 //CUERPO
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