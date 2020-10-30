import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/dbConnect'
import GameStats, { GameStatsInterface } from '../../models/GameStats'
import Users, { UsersInterface } from '../../models/Users'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const results = JSON.parse(req.body)
      const userNickname = results.nickname.replace(/"/g, '')

      // find users id
      const usersId: UsersInterface = await Users.findOne({
        nickname: userNickname,
      })

      if (usersId) {
        const findGameStats: GameStatsInterface[] = await GameStats.find({
          userId: usersId._id,
        })

        const response = findGameStats.map((game) => {
          return {
            course: game.course,
            gameDate: game.gameDate,
            score: game.finalScore,
          }
        })

        res
          .status(200)
          .json({
            status: 200,
            message: 'Here is the users course information!',
            response: response,
          })
      } else {
        res
          .status(200)
          .json({
            status: 200,
            message: 'API task resolved but no data was saved',
          })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
