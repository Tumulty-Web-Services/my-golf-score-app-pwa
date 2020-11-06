import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserProfile from '../../components/UserProfile'
import CourseLabel from '../../components/CourseLabel'
import GameCard from '../../components/GameCard'
import styles from '../../styles/Game.module.css'

export default function Game(): JSX.Element {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile />
      </div>
      <Container>
        <Row>
          <Col sm={12} md={9} className="mt-3 px-5">
            {items.map((item) => (
              <GameCard key={`game-${item}`} index={item.toString()} />
            ))}
          </Col>
          <Col sm={12} md={3} className="mt-3">
            <CourseLabel />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
