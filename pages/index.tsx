import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import auth0 from 'auth0-js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import btnStyles from '../styles/BtnStyles.module.css'
import verticalAlignStyle from '../styles/VerticalAlign.module.css'
import styles from '../styles/FormPages.module.css'

export default function Home(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmission() {
    /* eslint-disable */
    const webAuth = new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      responseType: 'code',
      redirectUri: `${process.env.BASE_URL}/profile`,
    })

    webAuth.login({
      realm: process.env.AUTH0_DB_CONNECTION,
      email: email,
      password: password,
    })
  }

  return (
    <Container className={styles.vh80}>
      <Head>
        <title>GolfJournal.io - Mobile-first progressive golf scorecard</title>
        <meta
          name="description"
          content=" Golfers, are you looking for an easy to use mobile application to track your golf score? Then golf journal is the app you are looking for!"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
      </Head>
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div
              className={`${verticalAlignStyle.containerBox} ${styles.mw276}`}
            >
              <h1 className="display-3">Log in</h1>
              <Form className="mt-5">
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
                  onClick={handleSubmission}
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
          </div>
        </Col>
      </Row>
    </Container>
  )
}
