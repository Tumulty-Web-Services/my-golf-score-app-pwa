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

/***
 *  Game Steps
 * =====================================
 *
 * 1.  Set the course length and name of hole when the page loads ✅
 * 2.  User puts in yards, score, par in hole 1 card and clicks save ✅
 * 3.  User clicks saves:
 *     * the card disappears ✅
 *     * the score field updates ✅
 *     * the card is added to the edit previous hole list, ✅
 *     * remove the card once added back to this it is removed from the completed round list 🚧
 *     * integrate a local storage layer to save game state
 *     * store values of saved game data in the placehold inputs
 * 4. If the user gets a great score the alert message popups before it disappears
 * 5.  This repeats until the game is completed
 *
 */

const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const eighteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

export default function Game({ session, course, length }): JSX.Element {
  const [courseLength, setCourseLength] = useState([])
  const [completedRound, setCompletedRound] = useState([])
  const [preFilter, setPreFilter] = useState(true)
  const [gameObj, setGameObj] = useState([])
  const [currentScore, setCurrentScore] = useState({})
  const [currentPar, setCurrentPar] = useState({})
  const [currentYards, setCurrentYards] = useState({})
  const [totalScore, setTotalScore] = useState(0)

  // Set the new game length after filter
  function setNewCourseLength(currentGameLength) {
    currentGameLength.forEach((game) => {
      const filteredGame = courseLength.filter(
        (hole) => hole !== parseInt(game.hole)
      )
      setPreFilter(false)
      setCourseLength(filteredGame)
    })
  }

  // build a new and add to the gameo bject
  function buildGameObj(currentHole) {
    const newGameObj = {
      score: currentScore,
      par: currentPar,
      yards: currentYards,
      hole: currentHole,
    }

    /** Remove the filtered object from gameObject */
    // const removeHoleFromGameObj = gameObj.filter(a => {
    //   if(a.hole !== completedHoleForRemoval.hole) {
    //     return a
    //   }
    // })

    // if(removeHoleFromGameObj.length > 0) {
    //   console.log(removeHoleFromGameObj)
    //   // setGameObj([...removeHoleFromGameObj, newGameObj])
    // }else {
    //
    // }
    setGameObj((gameObj) => [...gameObj, newGameObj])
    setNewCourseLength([...gameObj, newGameObj])
    setCompletedRound([...gameObj, newGameObj])
  }

  /** Set game length */
  useEffect(() => {
    function setGameLength() {
      if (length === 'eighteen') {
        setCourseLength(eighteen)
      }

      if (length === 'nine') {
        setCourseLength(nine)
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
            {completedRound.length > 0 && (
              <div className="d-block w-100 mb-3">
                <Dropdown className={styles.mx12}>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Edit Previous Hole
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Previous Holes</Dropdown.Item>
                    {completedRound.map((round) => (
                      <Dropdown.Item
                        onClick={() => {
                          /** add round back to course list */
                          setCourseLength((courseLength) =>
                            [...courseLength, round.hole].sort()
                          )
                        }}
                        key={round.hole}
                      >
                        {round.hole}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
            <div>
              {courseLength.map((item) => (
                <GameCard
                  path="/"
                  key={`game-${item}`}
                  index={item.toString()}
                  holeNum={item.toString()}
                  handlePar={(e) => setCurrentPar(e)}
                  gamePlaceHolders={
                    gameObj[item - 1] !== undefined
                      ? {
                          score: gameObj[item - 1].score,
                          par: gameObj[item - 1].par,
                          yards: gameObj[item - 1].yards,
                        }
                      : {
                          score: 'Score',
                          par: 'Par',
                          yards: 'Yards',
                        }
                  }
                  handleScore={(e) => {
                    setCurrentScore(e)
                    setTotalScore((totalScore) => (totalScore += parseInt(e)))
                  }}
                  handleYards={(e) => setCurrentYards(e)}
                  handHoleStorage={buildGameObj}
                />
              ))}
            </div>
          </Col>
          <Col sm={12} md={3} className="mt-3">
            <CourseLabel
              course={course}
              length={length}
              totalScore={totalScore}
            />
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
