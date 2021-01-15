require('dotenv').config();
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  try {
    const results = JSON.parse(event.body);
    const { nickname, course } = results

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const games = await db.collection('games');
    const lastGame = await games.find({
      user: nickname,
      course: course,
    })

    if(lastGame !== undefined && lastGame.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          satus: 200,
          replayGame: lastGame[0].rounds,
          msg: "Here is your last round!",
        }),
      };
    }

    return {
      statusCode: 200,
        body: JSON.stringify({
          satus: 200,
          replayGame: [],
          msg: "There isn't a last round",
        }),
    }

    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};