import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserProfile from '../../components/UserProfile'
import GameStats from '../../components/GameStats'
import styles from '../../styles/Welcome.module.css'

export default function Finish(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile path="/" />
      </div>
      <Container>
        <Row>
          <Col md={12} className="mt-4">
            <GameStats index="18" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
