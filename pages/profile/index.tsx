import Head from 'next/head'
import { useUser } from '../../utils/passport/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Profile.module.css'

function Profile() {
  const user: any = useUser({ redirectTo: '/' })
  const gameHistory = []

  return (
    <div className={styles.container}>
      <Head>
        <title>GolfJournal.io - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user !== undefined && (
        <div className={styles.userContainer}>
          <UserProfile
            path="/"
            profile={{
              name: user.userProfile.name,
              username: user.userProfile.username,
            }}
          />
        </div>
      )}
      <Container>
        <Row>
          {gameHistory.length > 0 &&
            gameHistory.map((game) => (
              <Col md={12} className="mt-3" key={game.month}>
                <CourseHistory month={game.month} games={game.games} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default Profile
