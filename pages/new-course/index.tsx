import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styles from '../../styles/SuccessBtn.module.css'

export default function NewCourse(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center login-container">
            <div className="login-box">
              <div className="login-box-wrapper">
                <h1 className="display-4">New Course</h1>
                <input
                  type="text"
                  className="p-3 mt-4 mb-2 w-100 border rounded"
                  placeholder="Enter name of course"
                />
                <Button
                  size="lg"
                  className={`${styles.orange} mt-4 mb-2 w-100`}
                >
                  Nine holes
                </Button>
                <Button size="lg" className={`${styles.orange} my-2 w-100`}>
                  Eighteen holes
                </Button>
                <Button
                  href="/game"
                  size="lg"
                  className={`${styles.green} my-4 w-100`}
                >
                  Start Course
                </Button>
              </div>
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

        .login-box-wrapper {
          max-width: 350px;
        }

        .login-box-wrapper h1 {
          font-family: 'Open Sans Extra Bold';
        }
      `}</style>
    </Container>
  )
}
