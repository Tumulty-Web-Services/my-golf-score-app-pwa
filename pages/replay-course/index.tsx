import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function ReplayCourse(): JSX.Element {
  return (
    <Container className="vh-100">
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Replay Course</h1>
                <input
                  type="text"
                  className="p-3 mt-4 mb-2 w-100 border rounded"
                  placeholder="Search for course"
                />
                <div className="text-left d-block radio-list-title mb-2 mt-2">
                  <small>Previous five courses</small>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={2} className="text-left">
                        Select Course
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4.5].map((hole) => (
                      <tr key={hole}>
                        <td width="20">
                          <input
                            type="checkbox"
                            id={`course-${hole}`}
                            name="replay-course"
                            value="Bunker Hill"
                          />
                        </td>
                        <td className="text-left">Bunker Hill </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button
                  href="/replay-game"
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
