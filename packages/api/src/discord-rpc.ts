import * as rpc from 'discord-rpc'

export type RichPresenceUpdateOptions = {
  title: string
  performer: string
  // cover: string
  progress: number
  duration: number
}

export const discordRpc = {
  client: new rpc.Client({
    transport: 'ipc'
  }),

  async connect(clientId: string) {
    await this.client.connect(clientId)
  },

  async updateRichPresence(opts: RichPresenceUpdateOptions) {
    console.log('[rich presence] updating:', opts)

    const secondsElapsed = opts.duration * opts.progress
    const secondsLeft = opts.duration - secondsElapsed

    await this.client.setActivity({
      largeImageKey: 'logo',
      largeImageText: opts.title,
      details: opts.title,
      state: `by ${opts.performer}`,
      endTimestamp: new Date(Date.now() + secondsLeft * 1000)
    })
  }
}
