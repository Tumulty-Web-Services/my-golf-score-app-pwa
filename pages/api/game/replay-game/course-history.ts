import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../utils/db-connect'
import Games, { GamesInterface } from '../../../../models/Games'

export default async function save(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const nickname = JSON.parse(req.body)

      const allUserGames: Array<GamesInterface> = await Games.find({
        user: nickname,
      })

      const replayGameHistory = allUserGames.map((game) => {
        return {
          label: game.course,
          dataLength: game.rounds.length,
        }
      })

      res.status(200).json({
        status: 200,
        replayGameHistory: replayGameHistory,
      })
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
