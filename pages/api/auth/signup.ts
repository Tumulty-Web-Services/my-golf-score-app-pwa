import { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from '../../../utils/passport/user'

type newUserProps = {
  status: number
  message: string
  data: {
    username: string
    name: string
    email: string
    subscription: string
    password: string
  }
}
export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newUser: newUserProps = await createUser(req.body)

    if (newUser.status === 201) {
      return res.status(201).json({
        status: 201,
        newUser: newUser.data,
      })
    }

    return res.status(400).json({
      status: 400,
      newUser: newUser.data,
    })
  } catch (error) {
    return res.status(400).json({
      status: 400,
      newUser: error,
    })
  }
}
