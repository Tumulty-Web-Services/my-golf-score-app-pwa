import Head from 'next/head'
import UserProfile from '../components/UserProfile'
import CourseHistory from '../components/CourseHistory'
import styles from '../styles/Profile.module.css'

function Profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Golf Score - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: "Mike Michigan",
                username: "mmichigan@gmail.com",
              }}
            />
          </div>
          <CourseHistory user="mmichigan@gmail.com" />
    </div>
  )
}

export default Profile
