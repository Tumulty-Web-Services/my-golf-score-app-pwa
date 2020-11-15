import crypto from 'crypto'
import dbConnect from '../db-connect'
import Users from '../../models/Users'

export async function createUser(newUser) {
  await dbConnect()

  try {
    const { username, name, email, subscription, password } = newUser
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    const user = await new Users({ username, name, email, subscription, salt, hash }).save()

    if(Object.keys(user).indexOf('_id') >= -1) {
      return {
        status: 201,
        message: `New user with was created!`,
        data: user
      }
    }


    return {
      status: 500,
      message: 'Sorry, there was an error creating your account.',
      data: {}
    }
  }catch(err) {
    return {
      status: 500,
      message: `There was an error creating a new account`,
      data: {}
    }
  }
}

export async function findUser(userToAuth) {
  await dbConnect()

  try {
    const { username, password } = userToAuth
    const user = await Users.findOne({ username })
    const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex')
    const passwordsMatch = user.hash === hash

    if(passwordsMatch === true) {
      return {
        status: 200,  
        authed: passwordsMatch,
        userProfile: user
       }
    }


    return {
      status: 403,  
      authed: passwordsMatch,
      userProfile: []
     } 
    
  }catch(err) {
    console.error(err)
    return {
      status: 403, 
      authed: false,
      userProfile: []
     } 
  }
}
