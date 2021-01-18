import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import useSWR from 'swr'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import { useUser } from '../../utils/passport/hooks'
import UserProfile from '../../components/UserProfile'
import CourseLabel from '../../components/CourseLabel'
import GameCard from '../../components/GameCard'
import styles from '../../styles/Game.module.css'
import { postFetcher } from '../../utils/fetch'

function sortByHole(a, b) {
  if (a.round < b.round) return -1
  if (a.round > b.round) return 1
}

export default function ReplayGame({ course, user }): JSX.Element {
  const userAuth: any = useUser({ redirectTo: '/' })
  const [preFilter, setPreFilter] = useState(true)
  const [incompleteRounds, setIncompleteRounds] = useState([])
  const [completedRounds, setCompletedRounds] = useState([])
  const [totalScore, setTotalScore] = useState(0)

  const { data: replayGame } = useSWR(
    [`/api/game/replay-game/game`, JSON.stringify({ nickname: user, course })],
    postFetcher
  )

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
      if (replayGame !== undefined) {
        setIncompleteRounds(replayGame.replayGame)
      }
    }

    if (preFilter) {
      setGameLength()
    }

    // every time the state updates load it to completed rounds local storage
    localStorage.setItem('rounds', JSON.stringify(completedRounds))
  })

  return (
    <>
      {userAuth && (
        <div className={styles.container}>
          <Head>
            <title>My Golf Score - Replay Play Game</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className={styles.userContainer}>
            <UserProfile
              path="/"
              profile={{
                name: userAuth.name,
                username: userAuth.username,
              }}
            />
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
                  length={incompleteRounds.length.toString()}
                  totalScore={totalScore}
                  user={user}
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
        user: query.user,
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
