import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function Feedback(): JSX.Element {
  return (
    <Container className="vh-100">
      <Head>
        <title>GolfJournal.io - Feedback</title>
        <meta
          name="description"
          content="Love golf journal or hate it? The team loves your input, we are continuously improvement the game experience and your input is vital to that process."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">What do you think?</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
