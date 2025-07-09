type MessageType = 'notification' | 'response' | 'error'
type LanguageType = 'en' | 'fa' | 'es' | 'tr'

type Message = `${MessageType}_${LanguageType}`

export type AllTypes = {
  toTranslate: Message
}