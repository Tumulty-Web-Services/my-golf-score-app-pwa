import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Profile.module.css'
import { postFetcher } from '../../utils/fetch'

export default function Profile({ gameHistory }): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>GolfJournal.io - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div className={styles.userContainer}>
        <UserProfile path="/" profile={session} />
      </div> */}
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

export const getServerSideProps: GetServerSideProps = async () => {
  // get game history based on user nickname
  const nickname = 'tumultywebservices'
  const userGameHistory = await postFetcher(
    `${process.env.BASE_URL}/api/user/game-history`,
    nickname
  )

  return {
    props: {
      authed: true,
      gameHistory: userGameHistory.gameHistory,
    },
  }
}
