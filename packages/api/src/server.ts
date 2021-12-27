import { createServer } from 'http'

import { discordRpc } from './discord-rpc'

export const server = createServer(async (req, res) => {
  res.setHeader('access-control-allow-origin', 'https://vk.com')
  res.setHeader('access-control-allow-methods', 'post')
  res.setHeader('access-control-allow-headers', 'content-type')

  if (req.url !== '/') {
    res.writeHead(404)
    return
  }

  const method = req.method?.toLowerCase()

  try {
    switch (method) {
      // do nothing
      case 'options': {
        res.writeHead(204)
        break
      }

      // update rich presence
      case 'post': {
        let data = ''

        req.on('data', (chunk) => {
          data += chunk
        })

        req.on('end', () => {
          discordRpc.updateRichPresence(JSON.parse(data))
        })

        res.writeHead(204)
        break
      }

      default: {
        res.writeHead(405)
        break
      }
    }
  } catch (error) {
    console.error('[server] error:', error)
  } finally {
    res.end()
  }
})
