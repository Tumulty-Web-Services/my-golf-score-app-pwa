import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'
import signUp from '../../utils/signup'

export default function SignUp(): JSX.Element {
  const account = {
    client_id: 'YOUR_CLIENT_ID',
    email: 'EMAIL',
    password: 'PASSWORD',
    connection: 'CONNECTION',
    username: 'johndoe',
    given_name: 'John',
    family_name: 'Doe',
    name: 'John Doe',
    nickname: 'johnny',
    picture: 'http://example.org/jdoe.png',
    user_metadata: { plan: 'silver', team_id: 'a111' },
  }

  return (
    <Container className="vh-100">
      <Head>
        <title>GolfJournal.io - Sign up</title>
        <meta
          name="description"
          content=" Golfers, are you looking for an easy to use mobile application to track your golf score? Then golf journal is the app you are looking for!"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <h1 className="display-3">Sign Up</h1>
              Form will go here..
              <Button
                onClick={() => signUp(account)}
                size="lg"
                className={`${btnStyles.green} my-4 w-100`}
              >
                Continue
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
