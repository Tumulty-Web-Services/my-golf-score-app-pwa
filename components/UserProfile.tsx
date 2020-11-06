import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import styles from '../styles/UserProfile.module.css'

const UserProfile = () => {
  const router = useRouter()

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className="p-5 avatar">
            <Image
              src="https://www.coolgenerator.com/Pic/Face//male/male1085215807342.jpg"
              width="120"
              roundedCircle
            />
            <div className="avatar-card">
              <h1>Peter F. Tumulty</h1>
              <Badge className={`${styles.green} mr-3 p-2`}>
                Best Score: 92
              </Badge>
              <Badge className={`${styles.blue} mx-2 p-2`}>
                Game Count: 36
              </Badge>
            </div>
          </div>
        </Col>
        {router.asPath === '/welcome' && (
          <Col sm={12} md={4}>
            <div className="p-5 play-buttons">
              <Button
                size="lg"
                className={`${styles.teal} d-block w-75 mb-3`}
                href="/new-course"
              >
                New Course
              </Button>
              <Button
                size="lg"
                className={`${styles.orange} d-block w-75 mb-3`}
                href="/replay-course"
              >
                Replay Course
              </Button>
            </div>
          </Col>
        )}
      </Row>
      <style jsx>{`
        .avatar {
          display: flex;
          flex-direction: row;
        }

        .avatar-card {
          margin-left: 2em;
        }

        .avatar-card h1 {
          font-family: 'Open Sans Bold';
        }
      `}</style>
    </Container>
  )
}

export default UserProfile
