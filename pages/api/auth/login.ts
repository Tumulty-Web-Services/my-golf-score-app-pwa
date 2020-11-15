import passport from 'passport'
import nextConnect from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import { localStrategy } from '../../../utils/passport/password-local'
import { encryptSession } from '../../../utils/passport/iron'
import { setTokenCookie } from '../../../utils/passport/auth-cookies'

const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(method, { session: false }, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })(req, res)
  })

passport.use(localStrategy)

export default nextConnect()
  .use(passport.initialize())
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user: any = await authenticate('local', req, res)

      if (user.status === 200) {
        const session = { ...user }
        const token = await encryptSession(session)

        setTokenCookie(res, token)
        return res.status(200).json({
          status: 200,
          message: 'Authed!  Redirect to profile...',
        })
      }

      return res.status(403).json({
        status: 403,
        message: 'Email/password are incorrect',
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        status: 500,
        message: JSON.stringify(error),
      })
    }
  })
