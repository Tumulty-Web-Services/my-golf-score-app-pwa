import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import UserProfile from '../../components/UserProfile'
import CourseLabel from '../../components/CourseLabel'
import GameCard from '../../components/GameCard'
import styles from '../../styles/Game.module.css'

export default function ReplayGame(): JSX.Element {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile path="/" />
      </div>
      <Container>
        <Row>
          <Col sm={12} md={9} className="mt-3 px-5">
            <div className="d-block w-100 mb-3">
              <Dropdown className={styles.mx12}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Edit Previous Hole
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>1</Dropdown.Item>
                  <Dropdown.Item>2</Dropdown.Item>
                  <Dropdown.Item>3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              {items.map((item) => (
                <GameCard
                  path="/"
                  key={`game-${item}`}
                  index={item.toString()}
                />
              ))}
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-3">
            <CourseLabel />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
