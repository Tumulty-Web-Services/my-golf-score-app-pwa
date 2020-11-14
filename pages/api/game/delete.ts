import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Games from '../../../models/Games'

export default async function save(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    try {
      const id = req.body.replace(/"/g, '')
      await Games.findByIdAndDelete(id)

      res.status(200).json({
        status: 200,
        message: `A coin with the id: ${id} was successfully deleted!`,
      })
    } catch (error) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }
  }
}
