import CryptoJS from 'crypto-js'

const ENCODING_SECRET = process.env.ENCODING_SECRET ?? ''

export const encryptToken = (text: string): string => {
  return CryptoJS.AES.encrypt(text, ENCODING_SECRET).toString()
}

export const decryptToken = (text: string): string => {
  const bytes = CryptoJS.AES.decrypt(text, ENCODING_SECRET)
  return bytes.toString(CryptoJS.enc.Utf8)
}
