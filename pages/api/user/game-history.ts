import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Games, { GamesInterface } from '../../../models/Games'

// format the date
function formatDateStringToMonthAndYear(d) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${month[d.getMonth()]} ${d.getFullYear()}`
}

function formatMonthDay(d) {
  const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  return `${month[d.getMonth()]}/${d.getDay()}`
}

export default async function save(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const nickname = JSON.parse(req.body)

      const allUserGames: Array<GamesInterface> = await Games.find({
        user: nickname,
      })

      if (allUserGames !== undefined && allUserGames.length > 0) {
        const userGameHistory = []
        const allGameDates = allUserGames.map((game) =>
          formatDateStringToMonthAndYear(game.gameDate)
        )

        allGameDates.forEach((date) => {
          const getGamesWithMatchingDate = allUserGames.filter(
            (a) => formatDateStringToMonthAndYear(a.gameDate) === date
          )
          userGameHistory.push({
            month: date,
            games: getGamesWithMatchingDate.map((g) => {
              return {
                id: g._id,
                course: g.course,
                score: g.totalScore,
                date: formatMonthDay(g.gameDate),
              }
            }),
          })
        })

        const uniqueArray = userGameHistory.filter((month, index) => {
          const _month = JSON.stringify(month)
          return (
            index ===
            userGameHistory.findIndex((obj) => {
              return JSON.stringify(obj) === _month
            })
          )
        })

        res.status(200).json({
          status: 200,
          gameHistory: uniqueArray,
        })
      } else {
        res.status(200).json({
          status: 200,
          gameHistory: [],
        })
      }
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
