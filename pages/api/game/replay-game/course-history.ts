import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../utils/db-connect'
import { createUniqueArr } from '../../../../utils/helpers'
import Games, { GamesInterface } from '../../../../models/Games'

export default async function courseHistory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const nickname = JSON.parse(req.body)

      const allUserGames: Array<GamesInterface> = await Games.find({
        user: nickname,
      })

      if (allUserGames !== undefined && allUserGames.length > 0) {
        const replayGameHistory = allUserGames.map((game) => {
          return {
            label: game.course,
            dataLength: game.rounds.length,
          }
        })

        const uniqurArr = await createUniqueArr(replayGameHistory)

        res.status(200).json({
          status: 200,
          replayGameHistory: uniqurArr,
        })
      } else {
        res.status(200).json({
          status: 200,
          replayGameHistory: [],
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
