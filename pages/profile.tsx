import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import UserProfile from '../components/UserProfile'
import CourseHistory from '../components/CourseHistory'
import styles from '../styles/Profile.module.css'
import netlifyAuth from '../utils/netlifyAuth';

function Profile() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user)
      setUser(user)
    })
  }, [loggedIn])

  return (
    <div className={styles.container}>
      {user && (
        <>
            <Head>
        <title>My Golf Score - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: user.full_name,
                username: user.email,
              }}
            />
          </div>
          <CourseHistory user={user.email}/>



        </>
      )}
    </div>
  )
}

export default Profile
