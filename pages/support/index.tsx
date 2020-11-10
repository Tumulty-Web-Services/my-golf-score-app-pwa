import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function Support(): JSX.Element {
  // 16WHUE7znT4bGUjw
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Need help?</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
