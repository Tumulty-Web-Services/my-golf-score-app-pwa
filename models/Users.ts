import mongoose, { Schema, Document } from 'mongoose'

const UsersSchema: Schema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  subscription: { type: String, required: true },
  salt: { type: String, required: true },
  hash: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
})

export interface UsersInterface extends Document {
  username: string
  name: string
  email: string
  subscription: string
  salt: string
  hash: string
  createdAt: Date
}

export default mongoose.models.Users ||
  mongoose.model<UsersInterface>('Users', UsersSchema)
