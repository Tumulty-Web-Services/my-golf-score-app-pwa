require('dotenv').config()
const { MongoClient } = require('mongodb')

exports.handler = async (event) => {
  try {
    const username = JSON.parse(event.body)

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = connection.db(process.env.DB_NAME)
    const games = await db.collection('games')
    const allUserGames = await games
      .find({
        user: username,
      })
      .sort([['totalScore', 'ascending']])
      .limit(1)

    if (allUserGames !== undefined && allUserGames.length > 0) {
      const gameCount = allUserGames.length

      return {
        statusCode: 200,
        body: JSON.stringify({
          satus: 200,
          gameCount: gameCount.toString(),
          msg: `Here's the game count for user: ${username}`,
        }),
      }
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({
          satus: 200,
          gameCount: 0,
          msg: `The game count for this user: ${username} is 0`,
        }),
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    }
  }
}
