import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../utils/dbConnect'
import GameStats, { GameStatsInterface } from '../../models/GameStats'
import Users, { UsersInterface } from '../../models/Users'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const results = JSON.parse(req.body)

      // update user profile with the id for the game
      const findUser: UsersInterface = await Users.findOne({
        nickname: results.finalGame.nickname.replace(/"/g, ''),
      })

      if (findUser) {
        const newGameData = {
          ...results.finalGame.game,
          userId: findUser._id,
        }

        const saveGame: GameStatsInterface = await new GameStats(
          newGameData
        ).save()

        // update the user object with the new game id
        await findUser.games.push(saveGame._id)
        res
          .status(201)
          .json({
            status: 201,
            message: 'New game was saved!',
            response: saveGame,
          })
      } else {
        res
          .status(200)
          .json({
            status: 200,
            message: 'API task resolved but no data was saved',
            response: findUser,
          })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
