import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import btnStyles from '../../styles/BtnStyles.module.css'
import verticalAlignStyle from '../../styles/VerticalAlign.module.css'

export default function NewCourse(): JSX.Element {
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
