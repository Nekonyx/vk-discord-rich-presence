import { CLIENT_ID, HOST, PORT } from './config'
import { discordRpc } from './discord-rpc'
import { server } from './server'

const bootstrap = async () => {
  console.log('[bootstrap] connecting to discord')
  await discordRpc.connect(CLIENT_ID)

  console.log(`[bootstrap] starting server on ${HOST}:${PORT}`)
  server.listen(PORT, HOST, () => {
    console.log(`[server] ready`)
  })
}

bootstrap()
  .then(() => {
    console.log('[main] ready')
  })
  .catch((error) => {
    console.error('[main] fatal error:', error)
    process.exit(1)
  })
