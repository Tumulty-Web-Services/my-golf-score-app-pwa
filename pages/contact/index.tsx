import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function Contact(): JSX.Element {
  return (
    <Container className="vh-100">
      <Head>
        <title>GolfJournal.io - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with the GolfJournal team for more information about the golfjournal mobile web app. We greatly apperciate your input."
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
                <h1 className="display-4">Get in touch</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
