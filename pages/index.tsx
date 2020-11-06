import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from '../styles/SuccessBtn.module.css'

export default function Home(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center login-container">
            <div className="login-box">
              <h1 className="display-3">Log in</h1>
              <Button
                href="/welcome"
                size="lg"
                className={`${styles.green} my-4 w-100`}
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
      <style jsx>{`
        .login-container {
          height: 75vh;
        }
        .login-box {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .login-box h1 {
          font-family: 'Open Sans Extra Bold';
        }

        .btn-success {
          background-color: #68d391;
        }
      `}</style>
    </Container>
  )
}
