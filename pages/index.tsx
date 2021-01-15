import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/FormPages.module.css'
import netlifyAuth from '../utils/netlifyAuth';

export default function Success(): JSX.Element {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [loggedIn])

  const login = () => {
    netlifyAuth.authenticate((user) => {
      console.log('user');
      console.log(user);
      setLoggedIn(!!user)
      setUser(user)
    })
  }
  
  const logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(false)
      setUser(null)
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
              You are logged in!
              {user && (
                <>
                <h2>User info...</h2>
                {JSON.stringify(user)}
                <button onClick={logout}>
                Log out here.
              </button>
                </>
              )}            
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
