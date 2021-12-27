import type { IAudioPlayer } from './types'

/**
 * Хост и порт локального сервера
 */
const HOST = '127.0.0.1'
const PORT = 25361

const updateRichPresence = async () => {
  // @ts-ignore
  // prettier-ignore
  const player = window.getAudioPlayer() as IAudioPlayer

  if (!player._isPlaying) {
    return
  }

  const audio = player.getCurrentAudio()
  const body = JSON.stringify({
    title: audio[3],
    performer: audio[4],
    // cover: audio[14].toString().split(',').pop(),
    duration: audio[5],
    progress: player.getCurrentProgress()
  })

  try {
    await fetch(`http://${HOST}:${PORT}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body
    })
  } catch {
    // it's okay
    // api server may be down
  }
}

window.addEventListener('load', () => {
  setInterval(updateRichPresence, 1000)
})
