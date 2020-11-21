import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { useUser } from '../../utils/passport/hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import UserProfile from '../../components/UserProfile'
import CourseLabel from '../../components/CourseLabel'
import GameCard from '../../components/GameCard'
import styles from '../../styles/Game.module.css'
import {
  defaultNineHoleCourse,
  defaultEighteenHoleCourse,
} from '../../utils/course-defaults'

function sortByHole(a, b) {
  if (a.round < b.round) return -1
  if (a.round > b.round) return 1
}

export default function Game({ course, length }): JSX.Element {
  const user: any = useUser({ redirectTo: '/' })
  const [preFilter, setPreFilter] = useState(true)
  const [incompleteRounds, setIncompleteRounds] = useState([])
  const [completedRounds, setCompletedRounds] = useState([])
  const [totalScore, setTotalScore] = useState(0)

  function createGameScore(completedRounds) {
    let score = 0

    completedRounds.forEach((r) => {
      score = score += parseInt(r.score)
    })

    setTotalScore(score)
  }

  function saveRoundData(r) {
    const inInCompletedRound = incompleteRounds.filter(
      (a) => a.round === r.round
    )
    const inCompletedRound = completedRounds.filter((a) => a.round === r.round)

    if (inInCompletedRound.length > 0) {
      const filterOutThisRoundFromIncomplete = incompleteRounds.filter(
        (a) => a.round !== r.round
      )

      setIncompleteRounds(filterOutThisRoundFromIncomplete)
      setCompletedRounds((completedRounds) => [...completedRounds, r])
      createGameScore([...completedRounds, r])
    }

    if (inCompletedRound.length > 0) {
      const filterOutThisRoundFromComplete = completedRounds.filter(
        (a) => a.round !== r.round
      )

      setCompletedRounds(filterOutThisRoundFromComplete)
      createGameScore(filterOutThisRoundFromComplete)
      setIncompleteRounds((incompleteRounds) => [...incompleteRounds, r])
    }

    setPreFilter(false)
  }

  useEffect(() => {
    function setGameLength() {
      if (length === 'eighteen') {
        setIncompleteRounds(defaultEighteenHoleCourse)
      }

      if (length === 'nine') {
        setIncompleteRounds(defaultNineHoleCourse)
      }
    }

    if (preFilter) {
      setGameLength()
    }

    if (!course && !length) {
      Router.push('/')
    }

    // every time the state updates load it to completed rounds local storage
    localStorage.setItem('rounds', JSON.stringify(completedRounds))
  })

  return (
    <>
      {user && (
        <div className={styles.container}>
          <Head>
            <title>GolfJournal.io - Play Game</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.userContainer}>
            {user !== undefined && (
              <UserProfile
                path="/"
                profile={{
                  name: user.name,
                  username: user.username,
                }}
              />
            )}
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
                        {completedRounds.sort(sortByHole).map((i, index) => (
                          <Dropdown.Item
                            key={`completed-${index}`}
                            onClick={() => saveRoundData(i)}
                          >
                            {i.round}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                <div>
                  {incompleteRounds.length > 0 &&
                    incompleteRounds
                      .sort(sortByHole)
                      .map((i) => (
                        <GameCard
                          path="/"
                          key={`game-${i.round}`}
                          index={i.round.toString()}
                          holeNum={i.round}
                          round={i}
                          handleHoleStorage={saveRoundData}
                        />
                      ))}
                </div>
              </Col>
              <Col sm={12} md={3} className="mt-3">
                <CourseLabel
                  course={course}
                  length={length}
                  totalScore={totalScore}
                  user={user.username}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  if (Object.keys(query).length > 0) {
    return {
      props: {
        course: query.course,
        length: query.length,
      },
    }
  }

  return {
    props: {
      course: '',
      length: '',
    },
  }
}
