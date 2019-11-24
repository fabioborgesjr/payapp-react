const server = require('./config/server')

require('./config/mongo')
require('./config/routes')(server)