import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserProfile from '../../components/UserProfile'
import styles from '../../styles/EditProfile.module.css'
import userStyles from '../../styles/Profile.module.css'

type Props = {
  session: {
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

export default function EditProfile({ session }): JSX.Element {
  return (
    <div className={userStyles.container}>
      <div className={userStyles.userContainer}>
        <UserProfile path="/" profile={session} />
      </div>
      <Container>
        <Row>
          <Col md={8} className="mt-3">
            <Card className="mb-3">
              <Card.Header>
                <h2 className={styles.fieldTitle}>Your Name</h2>
              </Card.Header>
              <Form>
                <Card.Body>
                  <Form.Group
                    controlId="formBasicEmail"
                    className={styles.mw75}
                  >
                    <Form.Label className="text-muted">
                      <small>
                        Please enter your full name, or a display name you are
                        comfortable with.
                      </small>
                    </Form.Label>
                    <Form.Control type="text" placeholder={session.user.name} />
                  </Form.Group>
                  <Button variant="dark">Save</Button>
                </Card.Body>
              </Form>
            </Card>
            <Card className="mb-3">
              <Card.Header>
                <h2 className={styles.fieldTitle}>Your Email</h2>
              </Card.Header>
              <Form>
                <Card.Body>
                  <Form.Group
                    controlId="formBasicEmail"
                    className={styles.mw75}
                  >
                    <Form.Label className="text-muted">
                      <small>
                        Please enter the email address you want to use to log in
                        with Golf Journal.
                      </small>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter new email" />
                  </Form.Group>
                  <Button variant="dark">Save</Button>
                </Card.Body>
              </Form>
            </Card>
            <Card className="mb-3">
              <Card.Header>
                <h2 className={styles.fieldTitle}>Your Avatar</h2>
              </Card.Header>
              <Form>
                <Card.Body>
                  <Form.Group
                    controlId="formBasicEmail"
                    className={styles.mw75}
                  >
                    <Form.Label className="text-muted">
                      <small>
                        This is your avatar. Click on the avatar to upload a
                        custom one from your files.
                      </small>
                    </Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Button variant="dark">Save</Button>
                </Card.Body>
              </Form>
            </Card>
            <div className="text-muted d-block mb-2">
              <small>
                <strong>Warning!</strong> If you delete your profile you will
                also delete all your associated games as well.
              </small>
            </div>
            <Button variant="danger" className="mb-3">
              Delete Profile
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
