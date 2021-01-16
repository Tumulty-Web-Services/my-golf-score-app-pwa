import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import UserProfile from '../components/UserProfile'
import CourseHistory from '../components/CourseHistory'
import styles from '../styles/Profile.module.css'
import netlifyAuth from '../utils/netlifyAuth'

function Profile() {
  const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  const [user, setUser] = useState(null)

  useEffect(() => {
    let isCurrent = true
    netlifyAuth.initialize((user) => {
      if (isCurrent) {
        setLoggedIn(!!user)
        setUser(user)
      }
    })

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <div className={styles.container}>
      {loggedIn && (
        <>
          <Head>
            <title>My Golf Score - Profile</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: user?.user_metadata.full_name,
                username: user?.user_metadata.email,
              }}
            />
          </div>
          <CourseHistory user={user?.user_metadata.email} />
        </>
      )}
    </div>
  )
}

export default Profile
