import Head from 'next/head'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Profile.module.css'
import { postFetcher } from '../../utils/fetch'

export default function Profile({ session, bestScore, gameCount, gameHistory }): JSX.Element {
  console.log(gameHistory)
  return (
    <div className={styles.container}>
      <Head>
        <title>GolfJournal.io - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.userContainer}>
        <UserProfile path="/" profile={session} bestScore={bestScore} gameCount={gameCount} />
      </div>
      <Container>
        <Row>
          {(gameHistory.length > 0) && gameHistory.map((game) => (
            <Col md={12} className="mt-3" key={game.month}>
              <CourseHistory month={game.month} games={game.games} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context

  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req)
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/auth/login',
      })
      res.end()

      return {
        props: {
          session: {},
          authed: false,
        },
      }
    }

    // get game history based on user nickname
    const nickname = session.user.nickname
    const userBestScore = await postFetcher(`${process.env.BASE_URL}/api/user/best-score`, nickname)
    const userGameCount = await postFetcher(`${process.env.BASE_URL}/api/user/game-count`, nickname)
    const userGameHistory = await postFetcher(`${process.env.BASE_URL}/api/user/game-history`, nickname)

    console.log(userGameHistory)

    return {
      props: {
        session: session,
        authed: true,
        bestScore: userBestScore.bestScore,
        gameCount: userGameCount.gameCount,
        gameHistory: userGameHistory.gameHistory
      },
    }
  }

  return {
    props: {
      session: {},
      authed: false,
    },
  }
}
