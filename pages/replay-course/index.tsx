import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import AutoCompleteInput from '../../components/AutoCompleteInput'
import { postFetcher } from '../../utils/fetch'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function ReplayCourse({ session }): JSX.Element {
  const { nickname } = session.user

  const { data: courseHistory, error: courseHistoryErr } = useSWR(
    [`/api/game/replay-game/course-history`, nickname],
    postFetcher
  )

  const router = useRouter()
  const [course, setCourse] = useState('')
  const [length, setLength] = useState('')

  function reDirectToGame() {
    router.push({
      pathname: '/replay-game',
      query: {
        course: course,
        length: length,
      },
    })
  }

  if (courseHistoryErr) return <div>There was an err.</div>

  return (
    <Container>
      <Head>
        <title>GolfJournal.io - Replay Course</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row>
        <Col md={12}>
          <div className="d-flex align-items-center mt-3">
            <div className={verticalAlignStyle.containerBox}>
              <div className={verticalAlignStyle.containerBoxWrapper}>
                <h1 className="display-4">Replay Course</h1>
                <AutoCompleteInput
                  items={courseHistory}
                  value={course}
                  handleInput={(course, courseLength) => {
                    setCourse(course)
                    setLength(courseLength)
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context

  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req)
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: '/api/auth/login',
      })
      res.end()

      return {
        props: {
          session: {},
          authed: false,
        },
      }
    }
    return {
      props: {
        session: session,
        authed: true,
      },
    }
  }

  return {
    props: {
      session: {},
      authed: false,
    },
  }
}
