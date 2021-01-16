require('dotenv').config()
const { MongoClient } = require('mongodb')

exports.handler = async (event) => {
  try {
    const results = JSON.parse(event.body)

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = connection.db(process.env.DB_NAME)
    const games = await db.collection('games')
    const allUserGames = await games.find({
      user: results,
    })

    return {
      statusCode: 201,
      body: JSON.stringify({
        satus: 201,
        data: allUserGames,
        msg: "You've save your game",
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    }
  }
}
