import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function Contact(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Get in touch</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
