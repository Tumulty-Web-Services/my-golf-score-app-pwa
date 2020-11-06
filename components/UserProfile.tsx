import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import styles from '../styles/UserProfile.module.css'
import btnStyles from '../styles/BtnStyles.module.css'

const UserProfile = () => {
  const router = useRouter()

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className={`${styles.avatar} py-3`}>
            <Image
              src="https://www.coolgenerator.com/Pic/Face//male/male1085215807342.jpg"
              className={styles.avatarProfile}
              roundedCircle
              fluid
              thumbnail
            />
            <div className={styles.avatarCard}>
              <h1>Peter F. Tumulty</h1>
              <Badge className={`${btnStyles.darkGreen} mr-3 p-2`}>
                {router.asPath === '/game' ||
                router.asPath === '/replay-game' ? (
                  <>Hole: 1</>
                ) : (
                  <>Best Score: 92</>
                )}
              </Badge>
              <Badge className={`${btnStyles.blue} mx-2 p-2`}>
                {router.asPath === '/game' ||
                router.asPath === '/replay-game' ? (
                  <>Score: 4</>
                ) : (
                  <>Game Count: 36</>
                )}
              </Badge>
            </div>
          </div>
        </Col>
        {router.asPath === '/welcome' && (
          <Col sm={12} md={4} className={styles.buttonContainer}>
            <div className={`d-flex ${styles.buttonGroup}`}>
              <Button className={`${btnStyles.teal} mr-2`} href="/new-course">
                New Course
              </Button>
              <Button className={`${btnStyles.orange}`} href="/replay-course">
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
