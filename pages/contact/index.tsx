import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contact(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center login-container">
            <div className="login-box">
              <h2 className="display-4">Get in touch</h2>
            </div>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .login-container {
          height: 19vh;
        }
        .login-box {
          text-align: left;
          margin-left: auto;
          margin-right: auto;
        }

        .login-box h2 {
          font-family: 'Open Sans Extra Bold';
        }
      `}</style>
    </Container>
  )
}
