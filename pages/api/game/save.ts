import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/db-connect'
import Games from '../../models/Games'

export default async function save(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ msg: 'save game data from local storage' })
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const results = JSON.parse(req.body)
      const newGame = new Games(results)

      res.status(200).json({
        status: 200,
        game: newGame,
      })
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
