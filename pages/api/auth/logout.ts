import { NextApiResponse } from 'next'
import { removeTokenCookie } from '../../../utils/passport/auth-cookies'

export default async function logout(_, res: NextApiResponse) {
  removeTokenCookie(res)
  res.writeHead(302, { Location: '/' })
  res.end()
}
