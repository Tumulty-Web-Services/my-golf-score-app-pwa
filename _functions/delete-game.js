require('dotenv').config();
const getId = require('./utils/getId');
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  try {
    const id = getId(event.path)

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const games = await db.collection('games');
    await games.findByIdAndDelete(id)

    return {
      statusCode: 200,
      body: JSON.stringify({
        satus: 200,
        msg: `Game with the id of ${id} has been deleted`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};