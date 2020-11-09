import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import auth0 from '../../utils/auth0'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import UserProfile from '../../components/UserProfile'
import CourseLabel from '../../components/CourseLabel'
import GameCard from '../../components/GameCard'
import styles from '../../styles/Game.module.css'

const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const eighteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

export default function TempGame({ session, course, length }): JSX.Element {
  const [preFilter, setPreFilter] = useState(true)
  const [incompleteRounds, setIncompleteRounds] = useState([])
  const [completedRounds, setCompletedRounds] = useState([])

  function saveRoundData(round) {
    const inInCompletedRound = incompleteRounds.includes(round)
    const inCompletedRound = completedRounds.includes(round)

    // toggle between completed round and incomplete round lists
    if (inInCompletedRound) {
      const removeRound = incompleteRounds.splice(
        incompleteRounds.indexOf(round),
        incompleteRounds.indexOf(round) + 1
      )

      // console.log('%c in incompleted rounds list', 'background-color: purple; color: white; font-size: 22px')
      // console.log('%c completedRounds.indexOf(round)',  'background-color: purple; color: white; font-size: 22px');
      // console.log(incompleteRounds.indexOf(round))
      // console.log(incompleteRounds.indexOf(round) + 1)

      // console.log([...completedRounds, removeRound[0]].sort())

      setCompletedRounds((completedRounds) =>
        [...completedRounds, removeRound[0]].sort()
      )
    }

    if (inCompletedRound) {
      const removeRound = completedRounds.splice(
        completedRounds.indexOf(round),
        completedRounds.indexOf(round) + 1
      )

      // Fix this...

      setIncompleteRounds((incompleteRounds) =>
        [...incompleteRounds, removeRound[0]].sort()
      )
    }

    setPreFilter(false)
  }

  useEffect(() => {
    function setGameLength() {
      if (length === 'eighteen') {
        setIncompleteRounds(eighteen)
      }

      if (length === 'nine') {
        setIncompleteRounds(nine)
      }
    }

    if (preFilter) {
      setGameLength()
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <UserProfile path="/" profile={session} />
      </div>
      <Container>
        <Row>
          <Col sm={12} md={9} className="mt-3 px-5">
            {completedRounds.length > 0 && (
              <div className="d-block w-100 mb-3">
                <Dropdown className={styles.mx12}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Edit Previous Hole
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Previous Holes</Dropdown.Item>
                    {completedRounds.map((round) => (
                      <Dropdown.Item
                        key={round}
                        onClick={() => saveRoundData(round)}
                      >
                        {round}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
            <div>
              {incompleteRounds.length > 0 &&
                incompleteRounds.map((round) => (
                  <GameCard
                    path="/"
                    key={`round-${round}`}
                    index={round}
                    holeNum={round}
                    handlePar={() => alert('handle par!')}
                    gamePlaceHolders={{
                      score: 'Score',
                      par: 'Par',
                      yards: 'Yards',
                    }}
                    handleScore={() => alert('handle score!')}
                    handleYards={() => alert('handle yards!')}
                    handHoleStorage={saveRoundData}
                  />
                ))}
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-3">
            <CourseLabel course={course} length="18" totalScore={0} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, query } = context

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
        course: query.course,
        length: query.length,
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
