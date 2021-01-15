import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import styles from '../styles/FormPages.module.css'
import netlifyAuth from '../utils/netlifyAuth.js'

export default function Success(): JSX.Element {
  const [errMsg, setErrMsg] = useState('')
  let [user, setUser] = useState(null)

  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [loggedIn])

  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
      setUser(user)
      netlifyAuth.closeModal()
    })
  }
  
  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
    })
  }

  // async function handleSubmission(e) {
  //   e.preventDefault()
  //   if (errMsg) setErrMsg('')

  //   const payload = {
  //     username: email,
  //     password: password,
  //   }
  //   try {
  //     const res = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload),
  //     }).then((data) => data.json())

  //     if (res.status === 200) {
  //       console.warn('sending you to your profile...')
  //       Router.push('/profile')
  //     } else {
  //       setErrMsg(res.message)
  //     }
  //   } catch (error) {
  //     setErrMsg(
  //       `Please contact support at support@golfjournal.io! Error: ${JSON.stringify(
  //         error
  //       )}`
  //     )
  //   }
  // }

  return (
    <Container className={styles.vh80}>
      <Head>
        <title>My Golf Score - Mobile-first progressive golf scorecard</title>
        <meta
          name="description"
          content=" Golfers, are you looking for an easy to use mobile application to track your golf score? Then golf journal is the app you are looking for!"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        {errMsg && (
          <Col sm={12}>
            <Alert variant="danger">{errMsg}</Alert>
          </Col>
        )}
        <Col md={12}>
          {/* <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div
              className={`${verticalAlignStyle.containerBox} ${styles.mw276}`}
            >
              <h1 className="display-3">Log in</h1>
              <Form className="mt-5" onSubmit={handleSubmission}>
                <Form.Group>
                  <Form.Label className="sr-only">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="sr-only">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Button
                  id="login"
                  size="lg"
                  type="submit"
                  className={`${btnStyles.green} my-4 w-100`}
                >
                  Continue
                </Button>
              </Form>
              <small>
                Don&apos;t have an account?{' '}
                <Link href="/sign-up">
                  <a>Sign up.</a>
                </Link>
              </small>
            </div>
          </div> */}
          {loggedIn ? (
            <div>
              You are logged in!
          
            {user && <>Welcome {user?.user_metadata.full_name}!</>}
              <br /> 
            <button onClick={logout}>
                Log out here.
              </button>
            </div>
          ) : (
            <button onClick={login}>
              Log in here.
            </button>
          )}
        </Col>
      </Row>
    </Container>
  )
}
