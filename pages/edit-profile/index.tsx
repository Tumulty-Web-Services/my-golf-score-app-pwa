import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useUser } from '../../utils/passport/hooks'
import UserProfile from '../../components/UserProfile'
import Subscription from '../../components/Subscription'
import styles from '../../styles/EditProfile.module.css'
import userStyles from '../../styles/Profile.module.css'

export default function EditProfile(): JSX.Element {
  const user: any = useUser({ redirectTo: '/' })
  return (
    <div className={userStyles.container}>
      <Head>
        <title>My Golf Score - Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user && (
        <>
          <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: user.name,
                username: user.username,
              }}
            />
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
                            Please enter your full name, or a display name you
                            are comfortable with.
                          </small>
                        </Form.Label>
                        <Form.Control type="text" placeholder="users name" />
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
                            Please enter the email address you want to use to
                            log in with Golf Journal.
                          </small>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter new email"
                        />
                      </Form.Group>
                      <Button variant="dark">Save</Button>
                    </Card.Body>
                  </Form>
                </Card>
                <Card className="mb-3">
                  <Card.Header>
                    <h2 className={styles.fieldTitle}>Your Subscription</h2>
                  </Card.Header>
                  <Form>
                    <Card.Body>
                      <Form.Group
                        controlId="formSubscription"
                        className={styles.mw75}
                      >
                        <Form.Label className="text-muted">
                          <small>
                            Here you can change your subscription tier.
                          </small>
                        </Form.Label>
                        <Subscription />
                      </Form.Group>
                      <Button variant="dark">Save</Button>
                    </Card.Body>
                  </Form>
                </Card>
                <div className="text-muted d-block mb-2">
                  <small>
                    <strong>Warning!</strong> If you delete your profile you
                    will also delete all your associated games as well.
                  </small>
                </div>
                <Button variant="danger" className="mb-3">
                  Delete Profile
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  )
}
