import mongoose, { Schema, Document } from 'mongoose'

const UsersSchema: Schema = new Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  games: [
    {
      gameId: { type: Schema.Types.ObjectId, ref: 'gamestats' }
    }
  ],
})

export interface UsersInterface extends Document {
  email: string
  nickname: string
  games: [
    {
      gameId: mongoose.Types.ObjectId
    }
  ]
}

export default mongoose.models.Users ||
  mongoose.model<UsersInterface>('Users', UsersSchema)
