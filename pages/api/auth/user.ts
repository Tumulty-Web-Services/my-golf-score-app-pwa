import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '../../../utils/passport/iron'

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getSession(req)

    res.status(200).json({ user: session || null })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).json({ message: error.message })
  }
}
