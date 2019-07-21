var shell = require('shelljs')
shell.exec('pm2 stop all')
if (shell.exec('service postgresql restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: postgresql restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","postgresql ok...!!!")
  }
  if (shell.exec('service redis-server restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: redis-server restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","redis-server ok...!!!")
  }
  if (shell.exec('service apache2 restart').code !== 0) {
    shell.echo("\x1b[31m",'Error: apache2 restart failed');
    shell.exit(1);
  }else{
      console.log("\x1b[32m","apache2 ok...!!!")
  }
  