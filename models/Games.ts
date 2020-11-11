import mongoose, { Schema, Document } from 'mongoose'

const GamesSchema: Schema = new Schema({
  user: { type: String, required: true },
  course: { type: String, required: true },
  totalScore: { type: String, required: true },
  gameDate: { type: Date, required: true, default: Date.now },
  rounds: [
    {
      score: { type: Number, required: true },
      par: { type: String, required: true },
      round: { type: String, required: true },
    },
  ],
})

export interface GamesInterface extends Document {
  user: string
  gameDate: string
  course: string
  totalScore: string
  rounds: [
    {
      score: number
      par: string
      round: string
    }
  ]
}

export default mongoose.models.Games ||
  mongoose.model<GamesInterface>('Games', GamesSchema)
