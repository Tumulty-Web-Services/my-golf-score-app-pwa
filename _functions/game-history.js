require('dotenv').config();
const { MongoClient } = require('mongodb');
const createUniqueArr = require('../utils/createUniqueArr');
const formatDateStringToMonthAndYear = require('../utils/formatDateStringToMonthAndYear');
const formatMonthDay = require('../utils/formatMonthDay');

exports.handler = async (event) => {
  try {
    const username = JSON.parse(event.body)

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const games = await db.collection('games');
    const allUserGames = await games.find({
      user: username,
    })
      .sort([['totalScore', 'ascending']])
      .limit(1)

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

        const uniqueArray = await createUniqueArr(userGameHistory)

        return {
          statusCode: 200,
          body: JSON.stringify({
            satus: 200,
            gameHistory: uniqueArray,
            msg: `Here's the name history for user: ${username}`,
          }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify({
            satus: 200,
            gameHistory: [],
            msg: `There is no game history for this user: ${username}`,
          }),
        };
      }

    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};