import Head from 'next/head'
import { useUser } from '../../utils/passport/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserProfile from '../../components/UserProfile'
import GameStats from '../../components/GameStats'
import styles from '../../styles/Profile.module.css'

export default function Finish(): JSX.Element {
  const user: any = useUser({ redirectTo: '/' })
  return (
    <>
      {user && (
        <div className={styles.container}>
          <Head>
            <title>GolfJournal.io - Game Finished</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.userContainer}>
            {user !== undefined && (
              <UserProfile
                path="/"
                profile={{
                  name: user.name,
                  username: user.username,
                }}
              />
            )}
          </div>
          <Container>
            <Row>
              <Col md={12} className="mt-4">
                <GameStats />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}
