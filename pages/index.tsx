import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import btnStyles from '../styles/BtnStyles.module.css'
import verticalAlignStyle from '../styles/VerticalAlign.module.css'

export default function Home(): JSX.Element {
  return (
    <Container className="vh-100">
      <Head>
        <title>GolfJournal.io - Mobile-first progressive golf scorecard</title>
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
              <h1 className="display-3">Log in</h1>
              <Button
                href="/api/auth/login"
                size="lg"
                className={`${btnStyles.green} my-4 w-100`}
              >
                Continue
              </Button>
              <small>
                Don&apos;t have an account?{' '}
                <Link href="/api/signup">
                  <a>Sign up.</a>
                </Link>
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
