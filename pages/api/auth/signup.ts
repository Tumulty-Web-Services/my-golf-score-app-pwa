import { NextApiRequest, NextApiResponse } from 'next'

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).end({ message: ' sign up will go here..' })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
