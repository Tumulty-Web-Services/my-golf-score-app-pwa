import auth0 from 'auth0'

async function signUp(account) {
  const { email, password, picture, name } = account
  const nickname = email.substring(0, email.lastIndexOf('@'))

  const newUser = {
    name: name,
    email: email,
    nickname: nickname,
    password: password,
    picture: picture,
  }
  const webAuth = new auth0.WebAuth({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENTID,
  })

  webAuth.signup(
    {
      connection: 'CONNECTION',
      email: email,
      password: password,
      username: nickname,
      name: name,
      nickname: nickname,
      picture: picture,
    },
    (err) => {
      if (err) {
        return {
          status: 500,
          message:
            'Error! There was an error on our end. Please contact support@golfjournal.io',
        }
      } else {
        return {
          status: 201,
          message: 'Success! Welcome to Golf Journal',
        }
      }
    }
  )

  return newUser
}

export default signUp
