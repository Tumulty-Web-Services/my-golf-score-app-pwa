import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/FormPages.module.css'
import netlifyAuth from '../utils/netlifyAuth'

export default function Success(): JSX.Element {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    let isCurrent = true
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user)
        router.push('/profile')
      }
    })

    return () => {
      isCurrent = false
    }
  }, [])

  const login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
    })
  }

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
        <Col md={12}>
          {loggedIn ? (
            <div>
              You&pos;re logged in! Please do visit{' '}
              <Link href="/profile">
                <a>the special, members-only space.</a>
              </Link>
            </div>
          ) : (
            <button onClick={login}>
              Log in here to access the members-only area.
            </button>
          )}
        </Col>
      </Row>
    </Container>
  )
}
