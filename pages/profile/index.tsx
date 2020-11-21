import Head from 'next/head'
import { useUser } from '../../utils/passport/hooks'
import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Profile.module.css'

function Profile() {
  const user: any = useUser({ redirectTo: '/' })

  return (
    <div className={styles.container}>
      <Head>
        <title>GolfJournal.io - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user && (
        <>
          <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: user.name,
                username: user.username,
              }}
            />
          </div>
          <CourseHistory user={user.username} />
        </>
      )}
    </div>
  )
}

export default Profile
