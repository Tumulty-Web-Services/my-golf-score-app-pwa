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
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <h1 className="display-3">Log in</h1>
              <Button
                href="/welcome"
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
