import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Games from '../../../models/Games'

export default async function save(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const results = JSON.parse(req.body)
      const newGame = await new Games(results).save()

      if (newGame !== undefined) {
        res.status(200).json({
          status: 200,
          game: newGame,
        })
      } else {
        res.status(500).json({
          status: 500,
          game: [],
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
