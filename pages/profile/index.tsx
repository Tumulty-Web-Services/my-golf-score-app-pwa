import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import UserProfile from '../../components/UserProfile'
import CourseHistory from '../../components/CourseHistory'
import styles from '../../styles/Profile.module.css'

export default function Profile({ session }): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile path="/" profile={session} />
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
    return {
      props: {
        session: session,
        authed: true,
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
