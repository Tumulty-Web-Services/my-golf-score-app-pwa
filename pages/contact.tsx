import React from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import verticalAlignStyle from '../styles/VerticalAlign.module.css'

export default function Feedback(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>My Golf Score - Feedback</title>
        <meta
          name="description"
          content="Get in touch with the GolfJournal team for more information about the golfjournal mobile web app. We greatly apperciate your input."
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col md={12}>
          <div
            className={`d-flex align-items-center ${verticalAlignStyle.containerFeedbackWrapper}`}
          >
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Get in touch</h1>
                <form
                  name="contact"
                  netlify
                >
                  <Row className="mb-3">
                    <Col sm={12} className="mx-0 mb-3 px-1">
                      <input
                        type="text"
                        className="form-control mx-0"
                        name="name"
                        placeholder="Full name"
                      ></input>
                    </Col>
                    <Col sm={12} className="mx-0 mb-3 px-1">
                      <input
                        type="email"
                        className="form-control mx-0"
                        name="email"
                        placeholder="Email address"
                      ></input>
                    </Col>
                    <Col sm={12} className="mx-0 px-1 mb-4">
                      <input
                        type="text"
                        className="form-control mx-0"
                        name="subject"
                        placeholder="Subject"
                      ></input>
                    </Col>
                    <Col sm={12} className="mx-0 px-1">
                      <textarea
                        className="form-control mx-0"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                    </Col>
                    <Button
                      variant="danger"
                      className="w-100 mt-2"
                      type="submit"
                    >
                      Submit form
                    </Button>
                  </Row>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
