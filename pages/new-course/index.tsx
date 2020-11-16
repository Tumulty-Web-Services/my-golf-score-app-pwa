import Head from 'next/head'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '../../utils/passport/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function NewCourse(): JSX.Element {
  const user: any = useUser({ redirectTo: '/' })
  const router = useRouter()
  const [course, setCourse] = useState('')
  const [length, setLength] = useState('')

  function reDirecToGame() {
    router.push({
      pathname: '/game',
      query: {
        course: course,
        length: length,
      },
    })
  }

  return (
    <>
      {user && (
        <Container className="vh-100">
          <Head>
            <title>GolfJournal.io - New Course</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
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
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                    <Button
                      size="lg"
                      className={`${btnStyles.orange} mt-4 mb-2 w-100`}
                      onClick={() => setLength('nine')}
                    >
                      Nine holes
                    </Button>
                    <Button
                      size="lg"
                      className={`${btnStyles.orange} my-2 w-100`}
                      onClick={() => setLength('eighteen')}
                    >
                      Eighteen holes
                    </Button>
                    <Button
                      size="lg"
                      className={`${btnStyles.green} my-4 w-100`}
                      onClick={() => reDirecToGame()}
                    >
                      Start Course
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}
