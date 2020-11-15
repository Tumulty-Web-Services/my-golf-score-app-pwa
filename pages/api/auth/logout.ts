import { NextApiRequest, NextApiResponse } from 'next'

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).end({ message: ' logout will go here..' })
  } catch (error) {
    console.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
