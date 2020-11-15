import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Games, { GamesInterface } from '../../../models/Games'

export default async function bestScore(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const username = JSON.parse(req.body)

      const gameWithBestScore: Array<GamesInterface> = await Games.find({
        user: username,
      })
        .sort([['totalScore', 'ascending']])
        .limit(1)

      if (gameWithBestScore !== undefined && gameWithBestScore.length > 0) {
        res.status(200).json({
          status: 200,
          bestScore: gameWithBestScore[0].totalScore,
        })
      } else {
        res.status(200).json({
          status: 200,
          bestScore: [],
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
