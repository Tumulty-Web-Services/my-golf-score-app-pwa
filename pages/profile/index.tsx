import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Welcome.module.css'

export default function Welcome(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile path="/" />
      </div>
      <Container>
        <Row>
          <Col md={12} className="mt-3">
            <CourseHistory month="November" />
          </Col>
          <Col md={12} className="mt-3">
            <CourseHistory month="October" />
          </Col>
          <Col md={12} className="mt-3">
            <CourseHistory month="September" />
          </Col>
          <Col md={12} className="mt-1 mb-5">
            <Button variant="outline-dark" className="w-100">
              Load More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
