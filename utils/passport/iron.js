import Iron from '@hapi/iron'
import { getTokenCookie } from './auth-cookies'

// Use an environment variable here instead of a hardcoded value for production
const TOKEN_SECRET = process.env.TOKEN_SECRET

export function encryptSession(session) {
  return Iron.seal(session, 'temp_secrer!!!!', Iron.defaults)
}

export async function getSession(req) {
  const token = getTokenCookie(req)
  return token && Iron.unseal(token, 'temp_secrer!!!!', Iron.defaults)
}
