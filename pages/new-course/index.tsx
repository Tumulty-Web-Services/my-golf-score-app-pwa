import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function NewCourse(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">New Course</h1>
                <input
                  type="text"
                  className="p-3 mt-4 mb-2 w-100 border rounded"
                  placeholder="Enter name of course"
                />
                <Button
                  size="lg"
                  className={`${btnStyles.orange} mt-4 mb-2 w-100`}
                >
                  Nine holes
                </Button>
                <Button size="lg" className={`${btnStyles.orange} my-2 w-100`}>
                  Eighteen holes
                </Button>
                <Button
                  href="/game"
                  size="lg"
                  className={`${btnStyles.green} my-4 w-100`}
                >
                  Start Course
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
