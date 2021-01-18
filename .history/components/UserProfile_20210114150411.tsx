import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import styles from 'styles/UserProfile.module.css'
import btnStyles from 'styles/BtnStyles.module.css'
import { postFetcher } from 'utils/fetch'

type Props = {
  path: string
  profile: {
    name: string
    username: string
  }
}

function AlertMessage() {
  return (
    <Alert variant="danger" dismissible>
      There is an error loading your profile data! Please contact
      support@golfjournal.io
    </Alert>
  )
}

const UserProfile = ({ path, profile }: Props) => {
  const { username, name } = profile

  const { data: bestScore, error: bestScoreErr } = useSWR(
    [`/api/user/best-score`, username],
    postFetcher
  )
  const { data: gameCount, error: gameCountErr } = useSWR(
    [`/api/user/game-count`, username],
    postFetcher
  )

  const router = useRouter()
  let currentPath = path

  if (router !== null) {
    currentPath = router.asPath
  }

  if (gameCountErr) return <AlertMessage />
  if (bestScoreErr) return <AlertMessage />

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className={`${styles.avatar} stories-avatar py-3`}>
            <div className={`${styles.avatarCard} stories-avatarCard`}>
              <h1 className="mb-0 pb-0">{name}</h1>
              {currentPath === '/edit-profile' ? (
                <Link href="/profile">
                  <a className={styles.editLink}>
                    <small>Back to profile</small>
                  </a>
                </Link>
              ) : (
                <Link href="/edit-profile">
                  <a className={styles.editLink}>
                    <small>Edit</small>
                  </a>
                </Link>
              )}
              <Badge
                className={`${btnStyles.darkGreen} stories-darkGreen mr-3 p-2`}
              >
                {currentPath === '/new/game' ||
                currentPath === '/replay/game' ? (
                  <>Hole: 1</>
                ) : (
                  <>
                    Best Score:{' '}
                    {bestScore !== undefined && bestScore.status === 200 && (
                      <>{bestScore.bestScore}</>
                    )}
                  </>
                )}
              </Badge>
              <Badge className={`${btnStyles.blue} stories-blue mx-2 p-2`}>
                {currentPath === '/new/game' ||
                currentPath === '/replay/game' ? (
                  <>Score: 4</>
                ) : (
                  <>
                    Game Count:{' '}
                    {gameCount !== undefined && gameCount.status === 200 && (
                      <>{gameCount.gameCount}</>
                    )}
                  </>
                )}
              </Badge>
            </div>
          </div>
        </Col>
        {currentPath === '/profile' && (
          <Col
            sm={12}
            md={4}
            className={`${styles.buttonContainer} stories-buttonContainer`}
          >
            <div className={`d-flex ${styles.buttonGroup} stories-buttonGroup`}>
              <Button
                className={`${btnStyles.teal} stories-teal mr-2`}
                href="/new/course"
              >
                New Course
              </Button>
              <Button
                className={`${btnStyles.orange} stories-orange`}
                href="/replay/course"
              >
                Replay Course
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default UserProfile
