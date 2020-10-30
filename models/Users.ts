import mongoose, { Schema, Document } from 'mongoose'
import { GameStatsInterface } from './GameStats'

const UsersSchema: Schema = new Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  games: [{ type: Schema.Types.ObjectId, ref: 'gamestats' }],
})

export interface UsersInterface extends Document {
  email: string
  nickname: string
  games: GameStatsInterface['_id']
}

export default mongoose.models.Users ||
  mongoose.model<UsersInterface>('Users', UsersSchema)
