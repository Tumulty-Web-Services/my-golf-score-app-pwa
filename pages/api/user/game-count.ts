import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Games, { GamesInterface } from '../../../models/Games'

export default async function gameCount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const nickname = JSON.parse(req.body)

      const allUserGames: Array<GamesInterface> = await Games.find({
        user: nickname,
      }).limit(-1)

      if (allUserGames !== undefined && allUserGames.length > 0) {
        const gameCount = allUserGames.length + 1

        res.status(200).json({
          status: 200,
          gameCount: gameCount.toString(),
        })
      } else {
        res.status(200).json({
          status: 200,
          gameCount: 0,
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
