import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import AutoCompleteInput from '../../components/AutoCompleteInput'
import ReplayCourseTable from '../../components/ReplayCourseTable'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function ReplayCourse(): JSX.Element {
  const router = useRouter()
  const [course, setCourse] = useState('')
  const [length, setLength] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [preSetUser, setPreSetUser] = useState(true)

  function onChange(e) {
    const checkedCourse = e.target.value
    const getCourseLengthAttr = e.target.getAttribute('data-length')

    setLength(getCourseLengthAttr)
    setCourse(checkedCourse)
  }

  function reDirectToGame() {
    router.push({
      pathname: '/replay/game',
      query: {
        user: currentUser,
        course: course,
        length: length,
      },
    })
  }

  useEffect(() => {
    if (preSetUser) {
      setCurrentUser('mmichigan@gmail.com')
      setPreSetUser(false)
    }
  })

  return (
    <Container>
      <Head>
        <title>My Golf Score - Replay Course</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center mt-3">
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Replay Course</h1>
                <AutoCompleteInput
                  user="mmichigan@gmail.com"
                  course={course}
                  handleInput={(item) => {
                    const { label, dataLength } = JSON.parse(item)
                    setCourse(label)
                    setLength(dataLength)
                  }}
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
                    <ReplayCourseTable
                      user="mmichigan@gmail.com"
                      onChange={onChange}
                    />
                  </tbody>
                </Table>
                <Button
                  onClick={() => reDirectToGame()}
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
