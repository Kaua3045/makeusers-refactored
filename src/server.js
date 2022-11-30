const server = require('./config/app')
const { envConfig } = require('./config/env')

server.listen(envConfig.server.port, (req, res) => {
  console.log(`listening on ${envConfig.server.serverUrl}`)
})