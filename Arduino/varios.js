var shell = require('shelljs');
//var shell = require('/root/.nvm/versions/node/v8.11.2/lib/node_modules/shelljs');
///root/.nvm/versions/node/v8.11.2/lib/node_modules/pm2/node_modules/s
//shell.exec('ping -c 5 167.86.119.191') 
var a= shell.exec('ping -c 5 167.86.119.191').stdout
console.log("--------------------------------------------------------------------")
//console.log(a.substring(0,4))
console.log(a.indexOf("received"))
console.log(parseInt(a.substring((a.indexOf("received")-2),a.indexOf("received"))))