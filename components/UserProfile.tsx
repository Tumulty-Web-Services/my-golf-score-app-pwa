import { useRouter } from 'next/router'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import styles from '../styles/UserProfile.module.css'
import btnStyles from '../styles/BtnStyles.module.css'

type Props = {
  path: string
  profile: {
    user: {
      name: string
      nickname: string
      picture: string
      sub: string
      updated_at: string
    }
    created: number
  }
}
const UserProfile = ({ path, profile }: Props) => {
  const { nickname, name, picture } = profile.user
  const router = useRouter()
  let currentPath = path

  if (router !== null) {
    currentPath = router.asPath
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className={`${styles.avatar} stories-avatar py-3`}>
            <div>
              <Image
                src={picture}
                alt={nickname}
                className={`${styles.avatarProfile} stories-avatarProfile d-block`}
                roundedCircle
                fluid
                thumbnail
              />
              {currentPath === '/edit-profile' ? (
                <Link href="/profile">
                  <a className="my-0 py-0 text-center d-block mx-auto">
                    <small>Back to profile</small>
                  </a>
                </Link>
              ) : (
                <Link href="/edit-profile">
                  <a className="my-0 py-0 text-center d-block mx-auto">
                    <small>Edit</small>
                  </a>
                </Link>
              )}
            </div>
            <div className={`${styles.avatarCard} stories-avatarCard`}>
              <h1>{name}</h1>
              <Badge
                className={`${btnStyles.darkGreen} stories-darkGreen mr-3 p-2`}
              >
                {currentPath === '/game' || currentPath === '/replay-game' ? (
                  <>Hole: 1</>
                ) : (
                  <>Best Score: 92</>
                )}
              </Badge>
              <Badge className={`${btnStyles.blue} stories-blue mx-2 p-2`}>
                {currentPath === '/game' || currentPath === '/replay-game' ? (
                  <>Score: 4</>
                ) : (
                  <>Game Count: 36</>
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
                href="/new-course"
              >
                New Course
              </Button>
              <Button
                className={`${btnStyles.orange} stories-orange`}
                href="/replay-course"
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
