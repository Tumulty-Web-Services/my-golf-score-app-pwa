import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../utils/db-connect'
import Games, { GamesInterface } from '../../../../models/Games'

export default async function game(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const results = JSON.parse(req.body)
      const parsedResults = JSON.parse(results)
      const { nickname, course } = parsedResults

      const lastGame: Array<GamesInterface> = await Games.find({
        user: nickname,
        course: course,
      })

      if (lastGame !== undefined && lastGame.length > 0) {
        res.status(200).json({
          status: 200,
          replayGame: lastGame[0].rounds,
        })
      } else {
        res.status(200).json({
          status: 200,
          replayGame: [],
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
