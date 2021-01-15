require('dotenv').config();
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  try {
    const username = JSON.parse(event.body)

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const games = await db.collection('games');
    const gameWithBestScore = await games.find({
      user: username,
    })
      .sort([['totalScore', 'ascending']])
      .limit(1)

      if (gameWithBestScore !== undefined && gameWithBestScore.length > 0) {
        return {
          statusCode: 200,
          body: JSON.stringify({
            satus: 200,
            bestScore: gameWithBestScore[0].totalScore,
            msg: `Here's the user: ${username}'s best game score`,
          }),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify({
            satus: 200,
            bestScore: [],
            msg: `There isn't a best score for this user: ${username}`,
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