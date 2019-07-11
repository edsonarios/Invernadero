var shell = require('shelljs')

shell.exec('service postgresql restart')
shell.exec('service redis-server restart')
shell.exec('service apache2 restart')
