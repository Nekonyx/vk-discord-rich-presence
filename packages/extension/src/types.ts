type AudioInfo = any[]

export interface IAudioPlayer {
  /**
   * Возвращает прогресс воспроизведения (от 0 до 1)
   */
  getCurrentProgress(): number

  /**
   * Возвращает информацию о текущей композиции
   */
  getCurrentAudio(): AudioInfo

  /**
   * Воспроизводится ли композиция в данный момент
   */
  _isPlaying: boolean
}
