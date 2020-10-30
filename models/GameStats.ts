import mongoose, { Schema, Document } from 'mongoose'
import { UsersInterface } from './GameStats'

const GameStatsSchema: Schema = new Schema({
  course: { type: String, required: true },
  courseType: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  finalScore: { type: String, required: true },
  holes: [
    {
      score: { type: String, required: true },
      par: { type: String, required: true },
      hole: { type: String, required: true },
    },
  ],
})

export interface GameStatsInterface extends Document {
  course: string
  courseType: string
  userId: UsersInterface['_id']
  finalScore: string
  holes: [
    {
      score: string
      par: string
      hole: string
    }
  ]
}

export default mongoose.models.GameStats ||
  mongoose.model<GameStatsInterface>('GameStats', GameStatsSchema)
